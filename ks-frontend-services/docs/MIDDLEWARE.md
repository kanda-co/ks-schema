Middleware
==
The middleware layer from `ks-frontend-services` handles authentication, routing, fetching relevant data from the store and rendering the page component based on a URL.

At its core, the middleware revolves around the `PathKey` type, that stores all possible pages, the current page key, any ID that was supplied as part of the URL and the current path.


How it works
---

The middleware layer consists of five main steps:

1. PathKey
2. Checking of authentication
3. Handling of route changes
4. Initial data provider
5. Rendering

PathKey
--

The current URL is transformed into a PathKey, which is a type that stores all possible pages, the current page key, any ID that was supplied as part of the URL and the current path. For example:

```
URL: /home
PathKey: {
  pages: {...},
  page: "home",
  id: null,
  path: "/home"
}
```

Or:

```
URL: /job/123
PathKey: {
  pages: {...},
  page: "job",
  id: '123',
  path: "/job/:id"
}
```


Checking of authentication
--
A given page has an optional `requiredRoles` array of strings that map to user roles on the backend. If this is not provided, then the authentication step will be skipped for a given page (for example, login). The user role will be fetched from the backend and compared to the page. If they do not match, the user will be redirected to /login. If they do match, the next step of the middleware proceeds.

Handling of route changes
--
The route change will be saved to the redux store, allowing for a replayable log of any page changes. This can be useful for debugging or tracking user behavior.

Initial data provider
--
Each page has an optional initialDataActions array that takes an array of actions that will run when this page has been hit. These actions are responsible for fetching relevant data from the backend and updating the store accordingly. An initialDataAction may also take an ID, depending on the action itself. The middleware handles passing this ID to these actions that require it automatically and the ID from the URL will be passed into these actions on demand.
   
   ```
   home: {
    path: '/home',
    PageComponent: Home,
    requiredRoles: ["company-admin"],
    loadingDependencies: [],
    initialDataActions: [createAction(actions.getCompanies)],
  },
  ```

Here, the `getCompanies` action will be fired when the user hits the page and the store will be updated according to the data that has been returned. An `initialDataAction` may also take an ID, depending on the action itself. The middleware handles passing this ID to these actions that require it automatically and the ID from the URL will be passed into these actions on route change.

However, these need to be marked as `idRequired` in order for the middleware to know to append the ID to the request. The reason for this is you can have multiple initial data actions, with only one provided with an ID. For example:

```
  job: {
    path: "/job/:id",
    PageComponent: Job,
    requiredRoles: ["company-admin"],
    loadingDependencies: ["job", "company"],
    idRequired: true,
    initialDataActions: [
      createAction(actions.getCompanies),
      createAction(
        actions.getInfoEntity,
        {
          params: {
            kind: "job",
          },
        },
        true
      ),
    ],
  },

```

Normally, `actions.getInfoEntity` would require `id` to be supplied as part of the `params` object. But, because we've passed `true` (for ID required) for the second argument of `createAction`, the middleware will take `:id` from the path and pass it down to the action. `idRequired` is also a property of the page itself. This instructs the middleware to throw an error when the URL has been hit but an ID has not been provided.

Closely related is the `loadingDependencies` property. This is an array of strings, with each string being a key of a relevant reducer in the store. This will allow us to show a loading state when the `job` & `company` reducers have `isLoading` set to true. We can access this loading state in the component with the `getIsLoading` selector:

```
const isLoading = useSelector(getIsLoading)
```

The `createAction` method also takes a forth parameter that is a callback for `onSuccess`. This callback will be passed the entity response (correclty typed) and can be used for chaining requests that depend on one another. This callback should return an array of initial data actions. For example:

```
createAction(actions.getJob, {
        forceReload: true,
}, true, (job) => [
    createAction(actions.getLead, {
            params: {
                id: job.quoted_to as string,
            }
    })
])
```

Notice that `forceReload` is passed to `job` as we always want to load from the API in this call, so `job` is always present.

Rendering of the page
--
The final step of the middleware, is to take the generated pathKey and pages, and render the `Page` component with the relevant `PageComponent` defined in the pages array. We export a `createRoutedApp` method, that will take the store and an object of pages. It will then return `pages` as an object, and a `Router` component that we can place in our application, that will handle routing & rendering.

Dispatching of actions
--
In order to dispatch correctly typed actions, you'll need to create a `useAppDispatch` hook like so:

```
import { createAppDispatchHook } from '@kanda-libs/ks-frontend-services'
import type { RootState, AppDispatch } from "store";

const useAppDispatch = createAppDispatchHook<RootState, AppDispatch>();
```

It is recommended to do the above in your `App/index.tsx` file and export it for use within the application.

Example
--

```
import {
  actions,
  createAction,
  createRoutedApp,
  createAppDispatchHook,
} from "@kanda-libs/ks-frontend-services";
import ForgotPassword from "pages/ForgotPassword";
import Home from "pages/Home";
import Login from "pages/Login";
import Logout from "pages/Logout";
import Staff from "pages/Staff";
import type { FunctionComponent } from "react";
import { type RootState, type AppDispatch, store } from "store";
import AppWrapper from "../AppWrapper";
import { URLS } from "./constants";

type PageKeys = "home" | "login" | "logout" | "forgot-password" | "staff";

const {
  pages,
  router: { Router },
} = createRoutedApp<RootState, PageKeys>(store, {
  login: {
    path: '/login',
    PageComponent: Login,
    loadingDependencies: [],
    initialDataActions: [],
  },
  logout: {
    path: '/logout',
    PageComponent: Logout,
    loadingDependencies: [],
    initialDataActions: [],
  },
  home: {
    path: '/',
    PageComponent: Home,
    requiredRoles: ["company-admin"],
    loadingDependencies: [],
    initialDataActions: [createAction(actions.getCompanies)],
  },
  company: {
    path: '/company/:id',
    PageComponent: Home,
    idRequired: true,
    requiredRoles: ["company-admin"],
    loadingDependencies: [],
    initialDataActions: [createAction(actions.getCompany, {}, true)],
  },
  "forgot-password": {
    path: '/forgot-password',
    PageComponent: ForgotPassword,
    loadingDependencies: [],
    initialDataActions: [],
  },
  staff: {
    path: '/staff',
    PageComponent: Staff,
    requiredRole: ["staff"],
    loadingDependencies: [],
    initialDataActions: [],
  },
});


// Used for dispatching app actions
const useAppDispatch = createAppDispatchHook<RootState, AppDispatch>();

export { pages, useAppDispatch};

const App: FunctionComponent = function () {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  );
};

export default App;
```
