import { FunctionComponent, useMemo } from 'react';
import type { AnyAction } from '@reduxjs/toolkit';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import type {
  GuardFunctionRouteProps,
  GuardToRoute,
  Next,
} from 'react-router-guards/dist/types';
import { BrowserRouter as Router, Switch, matchPath } from 'react-router-dom';
import {
  GuardedRoute,
  GuardProvider,
  type GuardProviderProps,
} from 'react-router-guards';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { PathKey } from '../store/types';
import type {
  PageList,
  Router as RouterType,
  Page as PageType,
  RouterChildren,
  InitialDataAction,
} from './types';
import { createPage, WrapperProps } from './Page';
import { FirebaseAuthService } from '../auth';
import { CreatePageArgs, createPages, handleIO } from './helpers';
import { clearOriginalUser, getOriginalUser, isGhosted } from './ghost';
import type { StringIndexedObject } from '../types';
import type { RoutedApp, ValidAction } from './types';
import { createAppSlice } from '../store/slices/app';
import { userLoggedIn, userNotLoggedIn } from '../store/slices/auth';
import services from '../service';
import { handleResponse, type Response } from '../handlers';
import { AuthUser, InfoGhost } from '../generated/components/schemas';
import { LOGIN_URL } from '../auth/constants';

export function getInitialDataPathKeyLayout<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
): FunctionComponent {
  if (!pathKey) return () => <></>;

  const page = pathKey.pages[pathKey.page as keyof P];

  if (!page) {
    throw new Error('Page not exist');
  }

  return page.PageComponent;
}

export function pathKeyToLoadingDependencies<
  State,
  P extends StringIndexedObject,
>(pathKey: PathKey<P>): Readonly<(keyof State)[]> {
  const { pages, page } = pathKey;
  if (!page) {
    throw new Error('Page does not exist');
  }

  if (!pages[page as keyof P]) {
    throw new Error('Page does not exist');
  }

  const loadingDependencies = pages[page as keyof P].loadingDependencies;

  return loadingDependencies as Readonly<(keyof State)[]>;
}

function getInitialDataPathKeyPath<P extends StringIndexedObject>(
  pages: PageList<P>,
  pathKey: Readonly<Pick<PathKey<P>, 'page' | 'id'>>,
): string {
  const { page } = pathKey;

  if (!page || !pages[page]) {
    throw new Error('Page not exist');
  }

  return pages[page].path;
}

// Provides an object of page keys mapped to their URLs
export function getPageUrls<P extends StringIndexedObject>(
  pages: PageList<P>,
): Record<keyof P, string> {
  return (Object.keys(pages) as (keyof P)[]).reduce((acc, pageKey) => {
    acc[pageKey] = pages[pageKey].path;
    return acc;
  }, {} as Record<keyof P, string>);
}

type PageKeyIdAndParams<P extends StringIndexedObject> = {
  key: keyof P;
  id?: string;
  params: StringIndexedObject<string>;
} | null;

interface MatchPathParams {
  id?: string;
}

function getPageKeyIdAndParams<P extends StringIndexedObject>(
  url: string,
  urls: Record<keyof P, string>,
): PageKeyIdAndParams<P> {
  // Loop through each key-value pair in the urls object
  for (let [key, value] of Object.entries(urls)) {
    // Get a match object for the given URL and the current route path
    let match = matchPath<MatchPathParams>(url, {
      path: value,
      exact: true,
      strict: true,
    });
    // If there is an exact match, return the key
    if (match && match.isExact) {
      const { id, ...params } = match.params;
      return {
        key: key as keyof P,
        id: match.params.id,
        params,
      };
    }
  }
  // If there is no exact match, return null
  return null;
}

function getInitialDataPathKey<P extends StringIndexedObject>(
  pages: PageList<P>,
  to: GuardToRoute,
): PathKey<P> {
  const urls = getPageUrls<P>(pages);
  const { url } = to.match;

  const { key: page, id, params } = getPageKeyIdAndParams<P>(url, urls);

  if (page === null) {
    throw new Error('Invalid page');
  }

  const originalUserToken = getOriginalUser();

  const pathKey = {
    page,
    id,
    isGhosted: isGhosted(url),
    originalUserToken,
  };

  return {
    ...pathKey,
    path: getInitialDataPathKeyPath(pages, pathKey),
    pages,
    params,
  };
}

function runInitialDataAction<Store, T extends ValidAction>(
  store: ToolkitStore<Store>,
  initialDataAction: InitialDataAction<T>,
  id?: string,
  forceReload?: boolean,
) {
  const { args = {}, action, idRequired, onLoad } = initialDataAction;

  const sharedArgs = {
    forceReload: forceReload || args.forceReload,
  };

  let formattedArgs = args as StringIndexedObject;
  const formattedAction = action as unknown as (
    args: StringIndexedObject,
  ) => ValidAction;

  if (idRequired) {
    if (!id) {
      throw new Error('ID not provided');
    }

    formattedArgs = {
      params: {
        id,
        ...(formattedArgs.params || {}),
      },
    };
  }

  const validAction = formattedAction({
    ...formattedArgs,
    ...sharedArgs,
  }) as unknown as ValidAction;

  store
    .dispatch(validAction as unknown as AnyAction)
    .then((entity: StringIndexedObject) => {
      // If there is an onLoad function, run it with the result of the action
      // and dispatch the returned action
      if (onLoad && entity.payload) {
        onLoad(entity.payload).forEach((currentAction) => {
          runInitialDataAction(store, currentAction, id, forceReload);
        });
      }
    });
}

export function fetchPageInitialData<State, P extends StringIndexedObject>(
  store: ToolkitStore<State>,
  pages: PageList<P>,
  { page, id }: PathKey<P>,
  forceReload = false,
): void {
  const currentPage = pages[page as keyof P] as PageType;

  if (!currentPage) {
    throw new Error('Page does not exist');
  }

  if (currentPage.idRequired && !id) {
    throw new Error('ID required');
  } else if (!currentPage.idRequired && id) {
    throw new Error('ID not required');
  }

  const initialDataActions = currentPage.initialDataActions;

  // Iterate through each of the initial data actions, whilst appending
  // both the shared args (whether or not to forceReload) and the ID
  // from the pathKey
  initialDataActions.forEach((action) => {
    runInitialDataAction(store, action, id, forceReload);
  });
}

export function initialDataProvider<State, P extends StringIndexedObject>(
  store: ToolkitStore<State>,
  pages: PageList<P>,
  pathKey: PathKey<P>,
) {
  if (!pathKey) {
    throw new Error('Missing path key');
  }

  fetchPageInitialData<State, P>(store, pages, pathKey);

  return pathKey;
}

function checkGhostedStatus<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
): Promise<void> {
  const { isGhosted, originalUserToken } = pathKey;

  if (!isGhosted && originalUserToken) {
    // Login as the original user
    clearOriginalUser();
    return new Promise((resolve, reject) => {
      FirebaseAuthService.signInWithCustomToken(originalUserToken)
        .then(() => {
          window.location.reload();

          // If we resolve the promise straight away, the auth layer will kick in and
          // redirect to /login. We could just not resolve the promise, but then in the
          // event the window doesn't reload correctly, the user will be stuck so better
          // to redirect to /login in this case
          setTimeout(() => resolve(), 1000);
        })
        .catch(() => {
          reject();
        });
    });
  }

  // If they have somehow landed on the ghost page without being ghosted, redirect
  // them to the homepage
  if (isGhosted && !originalUserToken) {
    window.location.href = '/';
    return new Promise((resolve) => {
      // Same as above
      setTimeout(() => resolve(), 1000);
    });
  }

  return Promise.resolve();
}

function routeChangeProvider<State, P extends StringIndexedObject>(
  store: ToolkitStore<State>,
  pathKey: PathKey<P>,
) {
  if (!pathKey) {
    throw new Error('Missing path key');
  }

  store.dispatch(
    // TODO: Figure out a better way of doing this
    createAppSlice<P>().actions.routeChange(pathKey as unknown as PathKey<P>),
  );

  return pathKey;
}

export async function getUser(): Promise<AuthUser> {
  const response = await services.authUser.me.method()()();
  const user = await handleResponse<AuthUser>(response as Response<AuthUser>);

  return user as AuthUser;
}

export async function ghostUser(email: string): Promise<InfoGhost> {
  const response = await services.infoGhost.infoGhost.method()({
    body: { email },
  })();
  const infoGhost = await handleResponse<InfoGhost>(
    response as Response<InfoGhost>,
  );

  return infoGhost as InfoGhost;
}

async function userIsLoggedIn<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
  store: ToolkitStore,
): Promise<boolean> {
  const { user: currentUser } = store.getState().auth;
  let role = currentUser?.role;
  let user = currentUser;

  const page = pathKey.pages[pathKey.page as keyof P];

  if (!page) {
    throw new Error('Page does not exist');
  }

  const isUserLoggedIn = await FirebaseAuthService.isUserLoggedIn();

  if (isUserLoggedIn && !role) {
    user = await getUser();
    role = user.role;

    const firebaseUser = FirebaseAuthService.auth.currentUser;

    store.dispatch(userLoggedIn({ user, firebaseUser }));
  }

  if (!isUserLoggedIn) {
    store.dispatch(userNotLoggedIn());
  }

  const requiredRoles = page.requiredRoles || [];

  if (requiredRoles.length > 0) {
    const [requiredRole] = requiredRoles;

    // Splat role means any role can access the page, providing
    // that the user is logged in
    if (requiredRole === '*') {
      if (user) {
        return Promise.resolve(true);
      }
      return Promise.reject(false);
    }

    if (requiredRoles.indexOf(role) === -1) {
      return Promise.reject(false);
    }
  }

  return Promise.resolve(true);
}

export function isAuthed<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
  store: ToolkitStore,
): () => Promise<TE.TaskEither<Error, PathKey<P>>> {
  return async () => {
    return userIsLoggedIn(pathKey, store)
      .then(async () => {
        await checkGhostedStatus<P>(pathKey);
        return TE.right(pathKey);
      })
      .catch(TE.left);
  };
}

// Creates the middleware used by react router guards
export function createMiddleware<State, P extends StringIndexedObject>(
  store: ToolkitStore<State>,
  pages: PageList<P>,
  unauthorizedRedirectRoute: string = LOGIN_URL,
) {
  return (
    to: GuardToRoute,
    from: GuardFunctionRouteProps | null,
    next: Next,
  ) => {
    // Extract the pathKey based on the current URL
    const pathKey = getInitialDataPathKey(pages, to);

    pipe(
      // Check whether the user is logged in and correctly authenticated
      TE.fromTask(isAuthed(pathKey, store)),
      TE.flatten,
      // If the user is authenticated, then we can proceed to the next page
      TE.map((currentPathKey) => routeChangeProvider(store, currentPathKey)),
      // Fetch the initial data required for page rendering
      TE.map((currentPathKey) =>
        initialDataProvider(store, pages, currentPathKey),
      ),
      // Pass through the pathKey and pages object to the end component for rendering
      // if the authentication and data fetching was successful
      TE.chain(() => handleIO(() => next.props({ pathKey, pages }))),
      // If not, log the user out
      TE.orElse(() =>
        handleIO(() => {
          const search = window.location.search;
          window.location.href = `${unauthorizedRedirectRoute}${search}`;
        }),
      ),
    )();
  };
}

// Creates the Router function component for use in rendering the application
function createRouterComponent<State, P extends StringIndexedObject>(
  store: ToolkitStore<State>,
  pages: PageList<P>,
  notFoundPage: FunctionComponent,
  Wrapper: FunctionComponent<WrapperProps> = ({ children }) => <>{children}</>,
  unauthorizedRedirectRoute: string = LOGIN_URL,
): FunctionComponent<RouterChildren> {
  return ({ children: additionaChildren }): JSX.Element => {
    // This package doesn't include correct typings for children,
    // probably due to it using an older version of react
    const Provider = GuardProvider as FunctionComponent<
      { children: JSX.Element } & GuardProviderProps
    >;

    const Page = useMemo(() => createPage(Wrapper), [Wrapper]);

    return (
      <Router>
        <Provider
          guards={[
            createMiddleware<State, P>(store, pages, unauthorizedRedirectRoute),
          ]}
          error={notFoundPage}
        >
          <Switch>
            <GuardedRoute path="/*" component={Page} meta={{ Wrapper }} />
          </Switch>
        </Provider>
        {additionaChildren}
      </Router>
    );
  };
}

// Creates a string indexed object matching the pages object, but with the
// values being the URL for that page
function createRouterUrls<T extends string | number>(
  pages: PageList,
): RouterType<T>['URLS'] {
  const URLS = Object.keys(pages).map(
    (pageKey) => pages[pageKey as keyof typeof pages].path,
  ) as unknown as { [key in T]: string };

  return URLS;
}

// A function to create the routing needed for a given application. This will
// return both the Router component and the URLs for the application in a StringIndexedObject
function createRouter<State, Keys extends string | number>(
  store: ToolkitStore<State>,
  pages: PageList,
  notFoundPage: FunctionComponent,
  Wrapper: FunctionComponent<WrapperProps> = ({ children }) => <>{children}</>,
  unauthorizedRedirectRoute: string = LOGIN_URL,
): RouterType<Keys> {
  const RouterComponent = createRouterComponent(
    store,
    pages,
    notFoundPage,
    Wrapper,
    unauthorizedRedirectRoute,
  );

  return {
    Router: RouterComponent,
    URLS: createRouterUrls<Keys>(pages),
  };
}

export function createRoutedApp<
  State,
  Keys extends string | number,
  ExtraState = {},
>(
  store: ToolkitStore<State & ExtraState>,
  args: Record<Keys, CreatePageArgs<State>>,
  notFoundPage: FunctionComponent = () => <>404</>,
  Wrapper: FunctionComponent<WrapperProps> = ({ children }) => <>{children}</>,
  unauthorizedRedirectRoute: string = LOGIN_URL,
): RoutedApp<Keys> {
  const pages = createPages<State, Keys>(args);
  const router = createRouter<State, Keys>(
    store,
    pages,
    notFoundPage,
    Wrapper,
    unauthorizedRedirectRoute,
  );
  return {
    router,
    pages,
  };
}
