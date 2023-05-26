import { configureStore } from '@reduxjs/toolkit';
import { slices as allSlices, auth, getSelectors } from '..';
import { getAppSelectors } from './helpers';
import { createAppSlice } from './slices/app';

export function createStore<PageKeys extends string>() {
  const appSlice = createAppSlice<PageKeys>();
  const app = appSlice.reducer;

  const { slices, ...reducers } = allSlices;

  const store = configureStore({
    reducer: { app, auth, ...reducers },
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
