Redux
==
Store stack
--
* Redux
* Redux-toolkit

## Why We Use Redux

Redux helps manage global state in our applications. We use Redux to store API requests and application state at the top of the application. This setup allows for the replaying of state changes, a feature that significantly aids in debugging. By keeping all state in one place, we can quickly inspect what's going on at any point in time and can understand the sequence of state changes that led to the current application state.

## Why We Use Redux-toolkit

Redux-toolkit is used in our package for two primary reasons:

1.  **Minimizing boilerplate Redux code**: Redux-toolkit abstracts many Redux implementation details, which reduces the amount of boilerplate code we need to write. This abstraction makes our codebase easier to understand, maintain, and expand.
    
2.  **Provides useful tools**: Redux-toolkit provides tools such as slices and entity adapters, which simplify the process of generating the entire store. These tools encapsulate the logic for managing specific types of state.
    

## Code Generation

Code generation for each entity defined in the `ks-schema` involves creating a reducer with corresponding actions for each API call. Here's how it works:

1.  **Generated Reducers**: Each `ks-schema` entity has a generated reducer created, which contains actions for each API call that the entity has defined in the schema. These actions will update the reducer state based on success or error response.
    
2.  **Selectors**: Selectors are generated using `getSelectors` and exported from `ks-frontend-services` as a `selectors` object. These selectors include functions for selecting the current item, all data by ID, and so on.
    
3.  **Actions**: All actions are exported as `actions` and are correctly typed based on their responses and input parameters. These actions are created using `createAsyncThunk`. Actions also have built-in logic to prevent making an API call when the requested item or list of items is already present in the store.

Actions also accept shared options for `onSuccess`, `onError`, `forceReload`. The `onSuccess/onError` will file depending on the outcome of the API call. Setting `forceReload` to `true` will skip the logic that prevents API calls if the item is already in the store.

5.  **getInfoEntity**: `getInfoEntity` has a special action handler. This handler will take the entities in the response (like company, job, etc.) and store them in their relevant reducers, as well as updating any loading states needed.

## Example usage
1. Defining a new store:
```
import { createStore, createSelectors } from "@kanda-libs/ks-frontend-services";
import { PageKeys, pages } from "components/shared/App";

export const store = createStore<PageKeys>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectors = createSelectors<RootState, typeof pages>();
```
2. Fetching the current selected company using selectors
```
import { selectors } from '@kanda-libs/ks-frontend-services'
const company = useSelector(selectors.company.getItem);
```
3. Dispatching an action
```
  import { useDispatch } from "react-redux";
  // ...
  const dispatch = useDispatch<AppDispatch>()
  // ...
  dispatch(
    actions.overrideJob({
      body: { action: "mark_job_as_accepted" },
      params: { id },
      onError: () => {
        showError("Error overriding job and finance status");
      },
      onSuccess: () => {
        showSuccess("Job and finance approved");
        successCallback();
      },
    })
  );
```
