// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type InfoCache, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const infoGetCache = createAsyncThunkAction(
  services.infoCache.infoGetCache,
);
export const infoPutCache = createAsyncThunkAction(
  services.infoCache.infoPutCache,
);
export const infoDeleteCache = createAsyncThunkAction(
  services.infoCache.infoDeleteCache,
);

export type InfoCacheReturn = AsyncThunkReturnType<
  typeof infoGetCache | typeof infoPutCache | typeof infoDeleteCache
>;
export type InfoCacheEntity = InfoCacheReturn[0];
export type InfoCacheParams = InfoCacheReturn[1];
export type InfoCacheConfig = InfoCacheReturn[2];

export type InfoCacheAsyncThunkAction = AsyncThunkAction<
  InfoCacheEntity,
  InfoCacheParams,
  InfoCacheConfig
>;

// Reducer
export type InfoCacheState = GeneratedState<InfoCache>;
const initialState: InfoCacheState = GENERATED_INITIAL_STATE;

export const handleInfoCacheResponse = createResponseHandler<
  InfoCacheState,
  InfoCache
>();

export const infoCacheSlice = createSlice({
  name: 'infoCache',
  initialState,
  reducers: {},
  extraReducers: {
    [infoGetCache.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoGetCache.fulfilled.type]: handleInfoCacheResponse,
    [infoGetCache.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [infoPutCache.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoPutCache.fulfilled.type]: handleInfoCacheResponse,
    [infoPutCache.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [infoDeleteCache.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoDeleteCache.fulfilled.type]: handleInfoCacheResponse,
    [infoDeleteCache.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoCacheSlice.reducer;
