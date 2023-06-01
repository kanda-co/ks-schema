import { configureStore } from '@reduxjs/toolkit';
import { slices as allSlices, auth, getSelectors } from '..';
import { createAppSlice } from './slices/app';
import query from './slices/query';
import { getAppSelectors } from './selectors/helpers';
import { getAuthSelectors } from './selectors/auth';
import querySelectors from './selectors/query';
import type { AuthState } from './slices/auth';

export function createStore<PageKeys extends string>() {
  const appSlice = createAppSlice<PageKeys>();
  const app = appSlice.reducer;

  const { slices, ...reducers } = allSlices;

  const store = configureStore({
    reducer: { app, query, auth, ...reducers },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
}

export function createSelectors<State extends { auth: AuthState }, Pages>() {
  return {
    ...getSelectors(),
    ...getAppSelectors<State, Pages>(),
    ...getAuthSelectors<State>(),
    ...querySelectors,
  };
}
