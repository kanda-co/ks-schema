import type { AsyncThunk, EntityState } from '@reduxjs/toolkit';
import { createAsyncThunk } from './toolkit';
import type { Response } from '../handlers';
import type { StringIndexedObject } from '../types';
import type { PageList } from '../middleware/types';

export type Payload<T> = () => Promise<Response<T>>;

export type AsyncThunkReturnType<T> = T extends AsyncThunk<
  infer Entity,
  infer Params,
  infer Config
>
  ? [Entity, Params, Config]
  : never;

export interface PathKey<P extends StringIndexedObject> {
  page?: keyof P;
  id?: string;
  path: string;
  pages: PageList<P>;
}

export interface GeneratedState<T> extends EntityState<T> {
  fetchedList: boolean;
  isLoading: boolean;
  isSubmitting: boolean;
}

// This isn't great, but reduxjs/toolkit does not export the proper types
type CreateAsyncThunkArguments = Parameters<typeof createAsyncThunk>;
type CreateAsyncThunkCallback = CreateAsyncThunkArguments[1];
type CreateAsyncThunkCallbackArguments = Parameters<CreateAsyncThunkCallback>;

export type ThunkAPI = CreateAsyncThunkCallbackArguments[1];

export interface AsyncThunkActionError {
  code?: number;
  message?: string;
}

export type SharedAsyncThunkActionArgs<
  Entity extends StringIndexedObject | undefined | void,
> = {
  protectedRequest?: boolean;
  additionalHeaders?: StringIndexedObject;
  preventLoadingState?: boolean;
  forceReload?: boolean;
  onSuccess?: (data: Entity) => void;
  onError?: (error: AsyncThunkActionError) => void;
};

export type AsyncThunkActionArgs<
  Args,
  Entity extends StringIndexedObject | undefined | void,
> = Args extends undefined
  ? SharedAsyncThunkActionArgs<Entity>
  : Args & SharedAsyncThunkActionArgs<Entity>;

export interface Selectors<T, S> {
  getReducer: (state: S) => S[keyof S];
  getEntities: (state: S) => EntityState<T>['entities'];
  getEntitiesAsArray: (state: S) => T[];
  getId: (state: S) => string | undefined;
  getEntity: (state: S) => T | undefined;
  getIsLoading: (state: S) => boolean;
  getIsSubmitting: (state: S) => boolean;
  getFetchedList: (state: S) => boolean;
}
