import { configureStore, type Reducer } from '@reduxjs/toolkit';
import { slices as allSlices, getSelectors } from '..';
import { createAppSlice } from './slices/app';
import auth from './slices/auth';
import { getAppSelectors } from './selectors/helpers';

// Helpers types, so we can correctly infer the state of the store
// even when passing in extra reducers
type ReducerState<R> = R extends Reducer<infer State> ? State : never;

type ReducerMap<M> = {
  [K in keyof M]: Reducer<M[K]>;
};

export function createStore<PageKeys extends string, M>(
  extraReducers: ReducerMap<M>,
) {
  const appSlice = createAppSlice<PageKeys>();
  const app = appSlice.reducer;

  const { slices, ...reducers } = allSlices;

  const store = configureStore({
    reducer: { app, auth, ...reducers, ...extraReducers },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
}

export function createSelectors<State, Pages>() {
  return {
    ...getSelectors(),
    ...getAppSelectors<State, Pages>(),
  };
}
