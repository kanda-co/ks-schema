import { type AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import type { Response } from '../handlers';
import type { StringIndexedObject } from '../types';

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

export interface Selectors<T, S> {
  getReducer: (state: S) => S[keyof S];
  getById: (state: S) => NormalizedEntities<T>['byId'];
  getAllIds: (state: S) => NormalizedEntities<T>['allIds'];
  getId: (state: S) => string | undefined;
  getItem: (state: S) => T | undefined;
  getIsSubmitting: (state: S) => boolean;
  getFetchedList: (state: S) => boolean;
  getItems: (state: S) => T[];
}
