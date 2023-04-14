import type { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSelector } from './toolkit';
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
  Selectors,
} from './types';
import { getPathKey } from './selectors/app';

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
  // TODO
): string => {
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

  return reducerName;
  // TODO
  //as keyof Pick<RootState, 'company' | 'monitor'>;
};

export const createAsyncThunkAction = <
  V extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  service: NewService<V, Args>,
): AsyncThunk<V, AsyncThunkActionArgs<Args>, {}> => {
  const { key, method } = service;
  return createAsyncThunk<V, AsyncThunkActionArgs<Args>>(
    key,
    async <T>(args: AsyncThunkActionArgs<Args> | void, thunkAPI: ThunkAPI) => {
      const state = thunkAPI.getState() as StringIndexedObject;
      const { byId, fetchedList } = state[getReducerName(key)];
      const { preventLoadingState, onSuccess, onError, ...methodArgs } =
        args || {
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

      try {
        const data = await handlePayload(payload as unknown as Payload<V>);

        if (onSuccess) {
          onSuccess();
        }

        return data;
      } catch (error) {
        if (onError) {
          onError();
        }
      }
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

export const generateSelectors = <
  Entity,
  State extends StringIndexedObject<GeneratedState<Entity>>,
>(
  reducer: keyof State,
): Selectors<Entity, State> => {
  const getReducer = (state: State) => state[reducer];

  const getById = createSelector(getReducer, (reducer) => reducer.byId);

  const getAllIds = createSelector(getReducer, (reducer) => reducer.allIds);

  const getId = createSelector(getPathKey, (pathKey) => {
    if (pathKey?.page !== reducer) return undefined;
    return pathKey.id;
  });

  const getItem = createSelector(
    getId,
    getById,
    getPathKey,
    (id, byId, pathKey) => {
      if (pathKey?.page !== reducer) return undefined;
      return byId[id];
    },
  );

  const getIsSubmitting = createSelector(
    getReducer,
    (reducer) => reducer.isSubmitting,
  );

  const getFetchedList = createSelector(
    getReducer,
    (reducer) => reducer.fetchedList,
  );

  const getItems = createSelector(
    getById,
    (byId) => Object.values(byId) as Entity[],
  );

  return {
    getReducer,
    getById,
    getAllIds,
    getId,
    getItem,
    getIsSubmitting,
    getFetchedList,
    getItems,
  };
};
