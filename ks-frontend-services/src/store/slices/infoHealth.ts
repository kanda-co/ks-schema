// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type InfoHealth, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const infoHealth = createAsyncThunkAction(
  services.infoHealth.infoHealth,
);

export type InfoHealthReturn = AsyncThunkReturnType<typeof infoHealth>;
export type InfoHealthEntity = InfoHealthReturn[0];
export type InfoHealthParams = InfoHealthReturn[1];
export type InfoHealthConfig = InfoHealthReturn[2];

export type InfoHealthAsyncThunkAction = AsyncThunkAction<
  InfoHealthEntity,
  InfoHealthParams,
  InfoHealthConfig
>;

// Reducer
export type InfoHealthState = GeneratedState<InfoHealth>;
const initialState: InfoHealthState = GENERATED_INITIAL_STATE;

export const handleInfoHealthResponse = createResponseHandler<
  InfoHealthState,
  InfoHealth
>();

export const infoHealthSlice = createSlice({
  name: 'infoHealth',
  initialState,
  reducers: {},
  extraReducers: {
    [infoHealth.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoHealth.fulfilled.type]: handleInfoHealthResponse,
    [infoHealth.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoHealthSlice.reducer;
