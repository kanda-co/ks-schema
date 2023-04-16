// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type Rate, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoRate = createAsyncThunkAction(services.rate.infoRate);
export const getRates = createAsyncThunkAction(services.rate.getRates);
export const postRate = createAsyncThunkAction(services.rate.postRate);
export const getRate = createAsyncThunkAction(services.rate.getRate);
export const putRate = createAsyncThunkAction(services.rate.putRate);
export const deleteRate = createAsyncThunkAction(services.rate.deleteRate);

export type RateReturn = AsyncThunkReturnType<
  | typeof infoRate
  | typeof getRates
  | typeof postRate
  | typeof getRate
  | typeof putRate
  | typeof deleteRate
>;
export type RateEntity = RateReturn[0];
export type RateParams = RateReturn[1];
export type RateConfig = RateReturn[2];

export type RateAsyncThunkAction = AsyncThunkAction<
  RateEntity,
  RateParams,
  RateConfig
>;

// Reducer
export type RateState = GeneratedState<Rate>;
const initialState: RateState = GENERATED_INITIAL_STATE;

export const handleRateResponse = handleResponse<RateState, Rate>;

export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    fetched: (state: RateState, action: PayloadAction<Rate[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: {
    [infoRate.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoRate.fulfilled.type]: handleRateResponse,
    [infoRate.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getRates.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getRates.fulfilled.type]: handleRateResponse,
    [getRates.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postRate.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postRate.fulfilled.type]: handleRateResponse,
    [postRate.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getRate.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getRate.fulfilled.type]: handleRateResponse,
    [getRate.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putRate.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putRate.fulfilled.type]: handleRateResponse,
    [putRate.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteRate.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteRate.fulfilled.type]: handleRateResponse,
    [deleteRate.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default rateSlice.reducer;
