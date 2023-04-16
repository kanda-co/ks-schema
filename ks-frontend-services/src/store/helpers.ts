import type {
  ActionCreatorWithOptionalPayload,
  AsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { createAsyncThunk, createSelector } from './toolkit';
import * as T from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import { fold } from 'fp-ts/lib/Either';
import { slices } from './slices/generated';
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
import type { InfoEntity } from '../generated/components/schemas';

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
  if (data.length === 0) {
    return state;
  }

  // Unique the array based on ID
  const formattedData = [...state.data, ...data];
  const uniqueData = Array.from(
    new Set(formattedData.map((item) => (item as DataWithId).id)),
  ).map((id) => {
    return formattedData.find((item) => (item as DataWithId).id === id);
  });
  const allIds = uniqueData.map((item) => (item as DataWithId).id);

  return {
    data: uniqueData,
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

const getReducerName = (key: string): keyof typeof slices => {
  const [reducerName] = key.split('.');

  const name = reducerName as keyof typeof slices;

  if (!reducerName) {
    throw new Error('Invalid reducer provided');
  }
  if ((Object.keys(slices) as (keyof typeof slices)[]).indexOf(name) === -1) {
    throw new Error('Invalid reducer provided');
  }

  return name;
};

// Creates an asyncThunkAction for a given service
// This will do the following when the action is called:
// 1. If InfoEntity, place the data in the relevant stores based on the Response
// 2. If not Info Entity, first check the relevant store to see if the data is already fetched
// 2a. If it is, return the data from the store
// 2b. If it is not, fetch the data and place it in the relevant store
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

      // Special case here because InfoEntity returns an object, with
      // keys corresponding to each entity with arrays in each. So we
      // take all the keys and then call the fetched action for the reducer
      // corresponding to each key
      // TODO: Const
      if (key === 'infoEntity.getInfoEntity') {
        const payload = method(args as unknown as Args);

        const data = await handlePayload(
          payload as unknown as Payload<InfoEntity>,
        );

        const keys = Object.keys(data) as (keyof InfoEntity)[];

        keys.forEach((key) => {
          const fetchedData = data[key];
          // We have to cast here because it calling it without doing so, results in a type error
          // because typescript infers the type as Company[] & Job[] & Monitor[] etc
          const fetchedAction = slices[key].actions
            .fetched as ActionCreatorWithOptionalPayload<typeof fetchedData>;

          thunkAPI.dispatch(fetchedAction(data[key]));
        });

        return [] as any;
      }

      const { byId, fetchedList } = state[getReducerName(key) as string];
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
            return [] as any;
          }
        } else if (fetchedList) {
          return [] as any;
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
  action: PayloadAction<Entity | Entity[]>,
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

export const generateSelectors = <
  Entity,
  State extends StringIndexedObject<GeneratedState<Entity>>,
>(
  reducer: keyof State,
): Selectors<Entity, State> => {
  const getReducer = (state: State) => state[reducer];

  const getData = createSelector(getReducer, (reducer) => reducer.data);

  const getAllIds = createSelector(getReducer, (reducer) => reducer.allIds);

  const getId = createSelector(getPathKey, (pathKey) => {
    if (pathKey?.page !== reducer) return undefined;
    return pathKey.id;
  });

  const getItem = createSelector(
    getId,
    getData,
    getPathKey,
    (id, data, pathKey) => {
      if (pathKey?.page !== reducer) return undefined;
      return data.find((item) => (item as { id: string }).id === id);
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

  return {
    getReducer,
    getData,
    getAllIds,
    getId,
    getItem,
    getIsSubmitting,
    getFetchedList,
  };
};
