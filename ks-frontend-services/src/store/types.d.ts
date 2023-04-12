import { type AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import type { Response } from '../handlers';
import type { StringIndexedObject } from '../types';

export interface RootState {}

export type Payload<T> = () => Promise<Response<T>>;

export interface NormalizedEntities<T> {
  byId: StringIndexedObject<T>;
  allIds: string[];
}

export type AsyncThunkReturnType<T> = T extends AsyncThunk<
  infer Entity,
  infer Params,
  infer Config
>
  ? [Entity, Params, Config]
  : never;

export interface PathKey<ValidPage> {
  page?: ValidPage;
  id?: string;
  path: string;
}

export interface GeneratedState<T> extends NormalizedEntities<T> {
  id?: string;
  fetchedList: boolean;
  isLoading: boolean;
  isSubmitting: boolean;
}

// This isn't great, but reduxjs/toolkit does not export the proper types
type CreateAsyncThunkArguments = Parameters<typeof createAsyncThunk>;
type CreateAsyncThunkCallback = CreateAsyncThunkArguments[1];
type CreateAsyncThunkCallbackArguments = Parameters<CreateAsyncThunkCallback>;

export type ThunkAPI = CreateAsyncThunkCallbackArguments[1];

export type SharedAsyncThunkActionArgs = {
  preventLoadingState?: boolean;
};

export type AsyncThunkActionArgs<Args> = Args extends undefined
  ? SharedAsyncThunkActionArgs
  : Args & SharedAsyncThunkActionArgs;
