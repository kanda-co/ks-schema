// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type InfoCustomer, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const infoCustomer = createAsyncThunkAction(
  services.infoCustomer.infoCustomer,
);

export type InfoCustomerReturn = AsyncThunkReturnType<typeof infoCustomer>;
export type InfoCustomerEntity = InfoCustomerReturn[0];
export type InfoCustomerParams = InfoCustomerReturn[1];
export type InfoCustomerConfig = InfoCustomerReturn[2];

export type InfoCustomerAsyncThunkAction = AsyncThunkAction<
  InfoCustomerEntity,
  InfoCustomerParams,
  InfoCustomerConfig
>;

// Reducer
export type InfoCustomerState = GeneratedState<InfoCustomer>;
const initialState: InfoCustomerState = GENERATED_INITIAL_STATE;

export const handleInfoCustomerResponse = createResponseHandler<
  InfoCustomerState,
  InfoCustomer
>();

export const infoCustomerSlice = createSlice({
  name: 'infoCustomer',
  initialState,
  reducers: {},
  extraReducers: {
    [infoCustomer.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoCustomer.fulfilled.type]: handleInfoCustomerResponse,
    [infoCustomer.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoCustomerSlice.reducer;
