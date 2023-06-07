ks-frontend-services
---
This repo takes the schema.yaml defined in ks-schema (one directory up) and transforms it into a number of different functions & variables that are used on the frontend in kanda for fetching and manipulating from the API. It exposes:

1. A services object -> This `services` object is a map of possible entities (`company`, `job`, `payment` etc) to each entities respective API calls such as `services.company.getCompany`. These API functions use `fp-ts` to handle any potential errors and need to be run through `handleResponse` in order to correctly handle a given API call
2. `useLoadData` / `useSubmit` react hooks for calling the API via the services object -> Both hooks use `useSWR` and `fp-ts` under the hood to handle calling the API and error reportng. `useLoadData` is used for API GET calls, and returns `data`, `error` & `isValidating` from the hook. Example:

```
const { data: jobs, isValidating, error } = useLoadData(services.job.getJobs);

// data is type `Job[]`
```

`useSubmit` is then used for all other API calls, such as `PUT` or `POST` and takes the relevant params to be sent with the API call. For example:

```
  const { submit: completeJob, isSubmitting } = useSubmit(
    services.job.completeJob,
  );

  //...

  completeJob({ params: { id: job.id || '' } }).then(({ data, error }) => {
      // API call has either passed or failed
  });
```
3. Code-gen'd redux store: See [Redux documentation](./docs/REDUX.md)
4. Middleware: Middleware for handling routing, authentication checking and initial data loading on the frontend. See: [Middleware documentation](./docs/MIDDLEWARE.md)


Checking schema changes locally
---
There may be times when you need to use a local version of `ks-frontend-services` in another locally hosted application. To do this you'll need to take the following steps:

1. Navigate one directory up to `ks-schema` and run `make clean build` -> This runs code gen for the services object etc. Any new entities will now be available
2. Build `ks-frontend-services` and publish to `yalc`: `cd ks-frontend-services && yarn build && yalc publish`
3. Use the new `yalc` package in your local application (for instance `ks-dashboard-frontend`): Navigate to your project and run `yalc add --link @kanda-libs/ks-frontend-services`. You may have to restart your application to see any relevant changes

Please note: Yalc will make changes to your `package.json` to point to your new local instance of `ks-frontend-services`. It's important this isn't committed to your branch as pushing this to `QA/Production` etc will break the build of that given application
