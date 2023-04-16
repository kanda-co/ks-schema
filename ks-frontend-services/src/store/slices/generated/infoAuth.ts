// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoAuth, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoAuth = createAsyncThunkAction(services.infoAuth.infoAuth);
export const infoVerify = createAsyncThunkAction(services.infoAuth.infoVerify);
export const infoPassword = createAsyncThunkAction(
  services.infoAuth.infoPassword,
);
export const infoSession = createAsyncThunkAction(
  services.infoAuth.infoSession,
);
export const infoClaimAccount = createAsyncThunkAction(
  services.infoAuth.infoClaimAccount,
);

export type InfoAuthReturn = AsyncThunkReturnType<
  | typeof infoAuth
  | typeof infoVerify
  | typeof infoPassword
  | typeof infoSession
  | typeof infoClaimAccount
>;
export type InfoAuthEntity = InfoAuthReturn[0];
export type InfoAuthParams = InfoAuthReturn[1];
export type InfoAuthConfig = InfoAuthReturn[2];

export type InfoAuthAsyncThunkAction = AsyncThunkAction<
  InfoAuthEntity,
  InfoAuthParams,
  InfoAuthConfig
>;

// Reducer
export type InfoAuthState = GeneratedState<InfoAuth>;
const initialState: InfoAuthState = GENERATED_INITIAL_STATE;

export const handleInfoAuthResponse = handleResponse<InfoAuthState, InfoAuth>;

export const infoAuthSlice = createSlice({
  name: 'infoAuth',
  initialState,
  reducers: {
    fetched: (state: InfoAuthState, action: PayloadAction<InfoAuth[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: {
    [infoAuth.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoAuth.fulfilled.type]: handleInfoAuthResponse,
    [infoAuth.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [infoVerify.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoVerify.fulfilled.type]: handleInfoAuthResponse,
    [infoVerify.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [infoPassword.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoPassword.fulfilled.type]: handleInfoAuthResponse,
    [infoPassword.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [infoSession.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoSession.fulfilled.type]: handleInfoAuthResponse,
    [infoSession.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [infoClaimAccount.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoClaimAccount.fulfilled.type]: handleInfoAuthResponse,
    [infoClaimAccount.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoAuthSlice.reducer;
