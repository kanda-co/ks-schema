import React, { type FunctionComponent } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import type {
  GuardFunctionRouteProps,
  GuardToRoute,
  Next,
} from 'react-router-guards/dist/types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { GuardProvider, type GuardProviderProps } from 'react-router-guards';
import type { PathKey } from '../store/types';
import type { PageList, Router as RouterType, Page as PageType } from './types';
import { NON_BLOCKING_ACTIONS } from './constants';
import Page from './Page';
import { FirebaseAuthService } from '../auth';
import { CreatePageArgs, createPages, handleIO } from './helpers';
import type { StringIndexedObject } from '../types';
import type { Role, RoutedApp, ValidAction } from './types';

export function getInitialDataPathKeyLayout<P extends StringIndexedObject>(
  pages: PageList<P>,
  pathKey: PathKey<P>,
): FunctionComponent {
  const page = pages[pathKey.page as keyof P];

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

function getInitialDataPathKey<P extends StringIndexedObject>(
  pages: PageList<P>,
  to: GuardToRoute,
): PathKey<P> {
  const url = to.match.url.split('/');
  const page = (url[1] || 'invite') as keyof typeof pages;

  if (Object.keys(pages).indexOf(page as string) === -1) {
    throw new Error('Invalid page');
  }

  const pathKey = {
    page,
    id: url[2],
  };

  return {
    ...pathKey,
    path: getInitialDataPathKeyPath(pages, pathKey),
    pages,
  };
}

export const runActions = (actions: ValidAction[]) => {
  actions.forEach((action) => {
    store.dispatch(action as unknown as AnyAction);
  });
};

export function fetchPageInitialData<P extends StringIndexedObject>(
  pages: PageList<P>,
  { page, id }: PathKey<P>,
  forceReload = false,
): void {
  store.dispatch(
    appSlice.actions.queueNonBlockingActions(Object.keys(NON_BLOCKING_ACTIONS)),
  );

  const sharedArgs = { forceReload };

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
  const actionsToRun: ValidAction[] = [];

  // Iterate through each of the initial data actions, whilst appending
  // both the shared args (whether or not to forceReload) and the ID
  // from the pathKey
  initialDataActions.forEach(({ args, action, idRequired }) => {
    let formattedArgs = args as StringIndexedObject;
    const formattedAction = action as (
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

    actionsToRun.push(
      formattedAction({
        ...formattedArgs,
        ...sharedArgs,
      }) as unknown as ValidAction,
    );
  });

  runActions(actionsToRun);
}

export function initialDataProvider<P extends StringIndexedObject>(
  pages: PageList<P>,
  pathKey: PathKey<P>,
) {
  if (!pathKey) {
    throw new Error('Missing path key');
  }

  fetchPageInitialData<P>(pages, pathKey);

  return pathKey;
}

export function routeChangeProvider<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
) {
  if (!pathKey) {
    throw new Error('Missing path key');
  }

  // TODO
  store.dispatch(
    appSlice.actions.routeChange(pathKey as unknown as PathKey<P>),
  );

  return pathKey;
}

function checkUserIsStaff(role: Role): boolean {
  return Boolean(role && role === 'staff');
}

function checkUserIsPartner(role: Role): boolean {
  return Boolean(role && role === 'partner');
}

async function getRole(): Promise<Role> {
  const user = await FirebaseAuthService.user();
  const idTokenResult = await user?.getIdTokenResult(true);
  const role = idTokenResult?.claims?.role || undefined;
  return Promise.resolve(role);
}

async function userIsLoggedInAndStaffOrPartner(role: Role): Promise<boolean> {
  await FirebaseAuthService.isUserLoggedIn();

  const isStaff = checkUserIsStaff(role);

  if (isStaff) {
    return Promise.resolve(true);
  }

  const isPartner = checkUserIsPartner(role);

  if (isPartner) {
    return Promise.resolve(true);
  }

  // Check if expiry is close to expiry, then refresh ahead of time
  const token = await FirebaseAuthService.token();
  const refreshRole = await getRole();

  if (token) {
    const isStaffAndHasToken = checkUserIsStaff(refreshRole);
    if (isStaffAndHasToken) {
      return Promise.resolve(true);
    }
    const isPartnerAndHasToken = checkUserIsStaff(refreshRole);
    if (isPartnerAndHasToken) {
      return Promise.resolve(true);
    }
  }

  return Promise.reject(false);
}

export function isAuthed<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
  authRequired: boolean,
): () => Promise<TE.TaskEither<Error, PathKey<P>>> {
  return async () => {
    if (!authRequired) {
      return Promise.resolve(TE.right(pathKey));
    }

    const role = await getRole();

    return userIsLoggedInAndStaffOrPartner(role)
      .then(() => TE.right(pathKey))
      .catch(TE.left);
  };
}

export function pathKeyRequiresAuth<P extends StringIndexedObject>(
  pathKey: PathKey<P>,
): boolean {
  const authRequired = ![
    'login',
    'logout',
    'staff-login',
    'forgot-password',
    'claim-account',
    'auth-link',
  ].includes((pathKey?.page || 'login') as string);

  return authRequired;
}

// Creates the middleware used by react router guards
export function createMiddleware<P extends StringIndexedObject>(
  pages: PageList<P>,
) {
  return (
    to: GuardToRoute,
    from: GuardFunctionRouteProps | null,
    next: Next,
  ) => {
    // Extract the pathKey based on the current URL
    const pathKey = getInitialDataPathKey(pages, to);

    pipe(
      // Check whether the page requires authentication
      pathKeyRequiresAuth(pathKey),
      // Check whether the user is logged in and correctly authenticated
      (authRequired) => TE.fromTask(isAuthed(pathKey, authRequired)),
      TE.flatten,
      // If the user is authenticated, then we can proceed to the next page
      TE.map(routeChangeProvider),
      // Fetch the initial data required for page rendering
      TE.map((currentPathKey) => initialDataProvider(pages, currentPathKey)),
      // Pass through the pathKey and pages object to the end component for rendering
      // if the authentication and data fetching was successful
      TE.chain((currentPathKey) =>
        handleIO(() => next.props({ pathKey: currentPathKey, pages })),
      ),
      // If not, log the user out
      TE.orElse(() => handleIO(() => next.redirect('/logout'))),
    )();
  };
}

// Creates the Router function component for use in rendering the application
function createRouterComponent<P extends StringIndexedObject>(
  pages: PageList<P>,
): FunctionComponent {
  return (): JSX.Element => {
    // This package doesn't include correct typings for children,
    // probably due to it using an older version of react
    const Provider = GuardProvider as FunctionComponent<
      { children: JSX.Element } & GuardProviderProps
    >;

    return (
      <Router>
        <Provider
          guards={[createMiddleware(pages)]}
          error={(args) => <div>{JSON.stringify(args)}</div>}
        >
          <Switch>
            <GuardedRoute path="/*" component={Page} />
          </Switch>
        </Provider>
      </Router>
    );
  };
}

// Creates a string indexed object matching the pages object, but with the
// values being the URL for that page
export function createRouterUrls<T extends string | number>(
  pages: PageList,
): RouterType<T>['URLS'] {
  const URLS = Object.keys(pages).map(
    (pageKey) => pages[pageKey as keyof typeof pages].path,
  ) as unknown as { [key in T]: string };

  return URLS;
}

// A function to create the routing needed for a given application. This will
// return both the Router component and the URLs for the application in a StringIndexedObject
export function createRouter<Keys extends string | number>(
  pages: PageList,
): RouterType<Keys> {
  const RouterComponent = createRouterComponent(pages);

  return {
    Router: RouterComponent,
    URLS: createRouterUrls<Keys>(pages),
  };
}

export function createRoutedApp<State, Keys extends string | number>(
  args: Record<Keys, CreatePageArgs<State>>,
): RoutedApp<Keys> {
  const pages = createPages<State, Keys>(args);
  const router = createRouter<Keys>(pages);

  return { router, pages };
}
