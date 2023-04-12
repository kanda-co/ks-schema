import {
  AsyncThunk,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import * as T from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import { fold } from 'fp-ts/lib/Either';
import type { StringIndexedObject, NewService } from '../types';
import { handleResponse as handleApiResponse } from '../handlers';
import type {
  AsyncThunkActionArgs,
  GeneratedState,
  NormalizedEntities,
  Payload,
  ThunkAPI,
  RootState,
} from './types';

export const handlePayload = <T>(payload: Payload<T>): Promise<T> =>
  payload().then(handleApiResponse) as Promise<T>;

export type DataWithId = {
  id: string;
};

export const formatById = <T>(data: T[]): StringIndexedObject<T> =>
  data.reduce((acc: StringIndexedObject<T>, item) => {
    acc[(item as DataWithId).id] = item;
    return acc;
  }, {} as StringIndexedObject<T>);

export const normalizeData = <T, S extends NormalizedEntities<T>>(
  data: T[],
  state: S,
): NormalizedEntities<T> => {
  const byId = { ...state.byId, ...formatById(data) };
  const allIds = Object.keys(byId);

  return {
    byId,
    allIds,
  };
};

export const isArrayOfValue = <Entity>(
  data: Entity | Entity[],
): data is Entity[] =>
  pipe(
    T.array(T.any).decode(data),
    fold(
      () => false,
      () => true,
    ),
  );

const getReducerName = (
  key: string,
): keyof Pick<RootState, 'company' | 'monitor'> => {
  const [reducerName] = key.split('.');
  if (!reducerName) {
    throw new Error('Invalid reducer provided');
  }
  if (
    ['app', 'company', 'monitor', 'job', 'payment', 'credit'].indexOf(
      reducerName,
    ) === -1
  ) {
    throw new Error('Invalid reducer provided');
  }

  return reducerName as keyof Pick<RootState, 'company' | 'monitor'>;
};

export const createAsyncThunkAction = <
  V extends StringIndexedObject | undefined,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  service: NewService<V, Args>,
): AsyncThunk<V, AsyncThunkActionArgs<Args>, {}> => {
  const { key, method } = service;
  return createAsyncThunk<V, AsyncThunkActionArgs<Args>, { state: RootState }>(
    key,
    async <T>(args: AsyncThunkActionArgs<Args> | void, thunkAPI: ThunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const { byId, fetchedList } = state[getReducerName(key)];
      const { preventLoadingState, ...methodArgs } = args || {
        args: undefined,
      };

      const finalMethodArgs = methodArgs as unknown as Args;

      // TODO: Find a better way of doing this
      const isGet = key.includes('get');

      if (isGet) {
        if (finalMethodArgs?.params?.id) {
          const item = byId[finalMethodArgs.params.id];

          // If the data is already in the store, don't fetch it again
          if (item) {
            return item;
          }
        } else if (fetchedList) {
          return Object.values(byId);
        }
      }

      const payload = method(finalMethodArgs);

      const data = await handlePayload(payload as unknown as Payload<V>);

      console.log({
        data,
      });

      return data;
    },
  );
};

export const handleResponse = <State extends GeneratedState<Entity>, Entity>(
  state: State,
  action: PayloadAction<Entity>,
) => {
  const { payload } = action;
  const isArray = isArrayOfValue<Entity>(payload);

  return {
    ...state,
    ...normalizeData(isArray ? payload : [payload], state),
    isLoading: false,
    isSubmitting: false,
    fetchedList: !state.fetchedList ? isArray : true,
  };
};

export const createResponseHandler = <
  State extends GeneratedState<Entity>,
  Entity,
>() => {
  return handleResponse<State, Entity>;
};
