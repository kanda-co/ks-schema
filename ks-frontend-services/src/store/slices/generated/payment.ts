// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type Payment, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getPayments = createAsyncThunkAction(services.payment.getPayments);
export const postPayment = createAsyncThunkAction(services.payment.postPayment);
export const getPayment = createAsyncThunkAction(services.payment.getPayment);
export const putPayment = createAsyncThunkAction(services.payment.putPayment);
export const deletePayment = createAsyncThunkAction(
  services.payment.deletePayment,
);
export const markPayment = createAsyncThunkAction(services.payment.markPayment);

export type PaymentReturn = AsyncThunkReturnType<
  | typeof getPayments
  | typeof postPayment
  | typeof getPayment
  | typeof putPayment
  | typeof deletePayment
  | typeof markPayment
>;
export type PaymentEntity = PaymentReturn[0];
export type PaymentParams = PaymentReturn[1];
export type PaymentConfig = PaymentReturn[2];

export type PaymentAsyncThunkAction = AsyncThunkAction<
  PaymentEntity,
  PaymentParams,
  PaymentConfig
>;

// Reducer
export type PaymentState = GeneratedState<Payment>;
const initialState: PaymentState = GENERATED_INITIAL_STATE;

export const handlePaymentResponse = handleResponse<PaymentState, Payment>;

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    fetched: (state: PaymentState, action: PayloadAction<Payment[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: {
    [getPayments.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getPayments.fulfilled.type]: handlePaymentResponse,
    [getPayments.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postPayment.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postPayment.fulfilled.type]: handlePaymentResponse,
    [postPayment.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getPayment.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getPayment.fulfilled.type]: handlePaymentResponse,
    [getPayment.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putPayment.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putPayment.fulfilled.type]: handlePaymentResponse,
    [putPayment.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deletePayment.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deletePayment.fulfilled.type]: handlePaymentResponse,
    [deletePayment.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [markPayment.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [markPayment.fulfilled.type]: handlePaymentResponse,
    [markPayment.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default paymentSlice.reducer;
