// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type Credit, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoCredit = createAsyncThunkAction(services.credit.infoCredit);
export const getCredits = createAsyncThunkAction(services.credit.getCredits);
export const postCredit = createAsyncThunkAction(services.credit.postCredit);
export const getCredit = createAsyncThunkAction(services.credit.getCredit);
export const putCredit = createAsyncThunkAction(services.credit.putCredit);
export const deleteCredit = createAsyncThunkAction(
  services.credit.deleteCredit,
);
export const quoteCredit = createAsyncThunkAction(services.credit.quoteCredit);
export const applyCredit = createAsyncThunkAction(services.credit.applyCredit);
export const checkCredit = createAsyncThunkAction(services.credit.checkCredit);
export const signCredit = createAsyncThunkAction(services.credit.signCredit);

export type CreditReturn = AsyncThunkReturnType<
  | typeof infoCredit
  | typeof getCredits
  | typeof postCredit
  | typeof getCredit
  | typeof putCredit
  | typeof deleteCredit
  | typeof quoteCredit
  | typeof applyCredit
  | typeof checkCredit
  | typeof signCredit
>;
export type CreditEntity = CreditReturn[0];
export type CreditParams = CreditReturn[1];
export type CreditConfig = CreditReturn[2];

export type CreditAsyncThunkAction = AsyncThunkAction<
  CreditEntity,
  CreditParams,
  CreditConfig
>;

// Reducer
export type CreditState = GeneratedState<Credit>;
const initialState: CreditState = GENERATED_INITIAL_STATE;

export const handleCreditResponse = handleResponse<CreditState, Credit>;

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    fetched: (state: CreditState, action: PayloadAction<Credit[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: {
    [infoCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoCredit.fulfilled.type]: handleCreditResponse,
    [infoCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getCredits.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getCredits.fulfilled.type]: handleCreditResponse,
    [getCredits.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postCredit.fulfilled.type]: handleCreditResponse,
    [postCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getCredit.fulfilled.type]: handleCreditResponse,
    [getCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putCredit.fulfilled.type]: handleCreditResponse,
    [putCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteCredit.fulfilled.type]: handleCreditResponse,
    [deleteCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [quoteCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [quoteCredit.fulfilled.type]: handleCreditResponse,
    [quoteCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [applyCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [applyCredit.fulfilled.type]: handleCreditResponse,
    [applyCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [checkCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [checkCredit.fulfilled.type]: handleCreditResponse,
    [checkCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [signCredit.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [signCredit.fulfilled.type]: handleCreditResponse,
    [signCredit.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default creditSlice.reducer;
