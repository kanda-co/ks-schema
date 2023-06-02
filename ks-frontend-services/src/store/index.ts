import { configureStore, type Reducer } from '@reduxjs/toolkit';
import { slices as allSlices, getSelectors } from '..';
import { createAppSlice } from './slices/app';
import auth from './slices/auth';
import { getAppSelectors } from './selectors/helpers';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

// Helpers types, so we can correctly infer the state of the store
// even when passing in extra reducers
type ReducerState<R> = R extends Reducer<infer State> ? State : never;

type ReducerMap<M> = {
  [K in keyof M]: Reducer<M[K]>;
};

export function createStore<PageKeys extends string, ExtraState>(
  extraReducers: ReducerMap<ExtraState>,
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

  type RootState = ReturnType<typeof store.getState> & ExtraState;

  // It's not nice having to cast like this, but the types do not infer
  // correctly otherwise because the types for this repo are bundled as
  // part of the library
  return store as unknown as ToolkitStore<RootState>;
}

export function createSelectors<State, Pages>() {
  return {
    ...getSelectors(),
    ...getAppSelectors<State, Pages>(),
  };
}
