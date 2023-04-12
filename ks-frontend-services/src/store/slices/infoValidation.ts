// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type InfoValidation, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const infoValidateEmail = createAsyncThunkAction(
  services.infoValidation.infoValidateEmail,
);

export type InfoValidationReturn = AsyncThunkReturnType<
  typeof infoValidateEmail
>;
export type InfoValidationEntity = InfoValidationReturn[0];
export type InfoValidationParams = InfoValidationReturn[1];
export type InfoValidationConfig = InfoValidationReturn[2];

export type InfoValidationAsyncThunkAction = AsyncThunkAction<
  InfoValidationEntity,
  InfoValidationParams,
  InfoValidationConfig
>;

// Reducer
export type InfoValidationState = GeneratedState<InfoValidation>;
const initialState: InfoValidationState = GENERATED_INITIAL_STATE;

export const handleInfoValidationResponse = createResponseHandler<
  InfoValidationState,
  InfoValidation
>();

export const infoValidationSlice = createSlice({
  name: 'infoValidation',
  initialState,
  reducers: {},
  extraReducers: {
    [infoValidateEmail.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoValidateEmail.fulfilled.type]: handleInfoValidationResponse,
    [infoValidateEmail.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoValidationSlice.reducer;
