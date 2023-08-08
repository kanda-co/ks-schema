import { configureStore, type Reducer } from '@reduxjs/toolkit';
import { slices as allSlices, getSelectors } from '..';
import { createAppSlice } from './slices/app';
import auth from './slices/auth';
import { getAppSelectors } from './selectors/helpers';
import { getAuthSelectors } from './selectors/auth';
import type { AuthState } from './slices/auth';

type ReducerMap<M> = {
  [K in keyof M]: Reducer<M[K]>;
};

export function createStore<PageKeys extends string, ExtraState = {}>(
  extraReducers: ReducerMap<ExtraState> = {} as ReducerMap<ExtraState>,
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

  // It's not nice having to cast like this, but the types do not infer
  // correctly otherwise because the types for this repo are bundled as
  // part of the library
  return store;
}

export type AuthSlice = { auth: AuthState };

export function createSelectors<State extends AuthSlice, Pages>() {
  return {
    ...getSelectors(),
    ...getAppSelectors<State, Pages>(),
    ...getAuthSelectors<State>(),
  };
}
