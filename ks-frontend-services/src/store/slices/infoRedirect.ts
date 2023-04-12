// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type InfoRedirect, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const infoLegacyRedirect = createAsyncThunkAction(
  services.infoRedirect.infoLegacyRedirect,
);

export type InfoRedirectReturn = AsyncThunkReturnType<
  typeof infoLegacyRedirect
>;
export type InfoRedirectEntity = InfoRedirectReturn[0];
export type InfoRedirectParams = InfoRedirectReturn[1];
export type InfoRedirectConfig = InfoRedirectReturn[2];

export type InfoRedirectAsyncThunkAction = AsyncThunkAction<
  InfoRedirectEntity,
  InfoRedirectParams,
  InfoRedirectConfig
>;

// Reducer
export type InfoRedirectState = GeneratedState<InfoRedirect>;
const initialState: InfoRedirectState = GENERATED_INITIAL_STATE;

export const handleInfoRedirectResponse = createResponseHandler<
  InfoRedirectState,
  InfoRedirect
>();

export const infoRedirectSlice = createSlice({
  name: 'infoRedirect',
  initialState,
  reducers: {},
  extraReducers: {
    [infoLegacyRedirect.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoLegacyRedirect.fulfilled.type]: handleInfoRedirectResponse,
    [infoLegacyRedirect.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoRedirectSlice.reducer;
