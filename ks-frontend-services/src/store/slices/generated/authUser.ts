// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type AuthUser, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const me = createAsyncThunkAction(services.authUser.me);
export const postMe = createAsyncThunkAction(services.authUser.postMe);
export const putMe = createAsyncThunkAction(services.authUser.putMe);

export type AuthUserReturn = AsyncThunkReturnType<
  typeof me | typeof postMe | typeof putMe
>;
export type AuthUserEntity = AuthUserReturn[0];
export type AuthUserParams = AuthUserReturn[1];
export type AuthUserConfig = AuthUserReturn[2];

export type AuthUserAsyncThunkAction = AsyncThunkAction<
  AuthUserEntity,
  AuthUserParams,
  AuthUserConfig
>;

// Reducer
export type AuthUserState = GeneratedState<AuthUser>;
const initialState: AuthUserState = GENERATED_INITIAL_STATE;

export const handleAuthUserResponse = handleResponse<AuthUserState, AuthUser>;

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    fetched: (state: AuthUserState, action: PayloadAction<AuthUser[]>) => ({
      ...state,
      ...handleResponse(state, action),
    }),
  },
  extraReducers: {
    [me.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [me.fulfilled.type]: handleAuthUserResponse,
    [me.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postMe.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postMe.fulfilled.type]: handleAuthUserResponse,
    [postMe.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putMe.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putMe.fulfilled.type]: handleAuthUserResponse,
    [putMe.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default authUserSlice.reducer;
