import type {
  ActionCreatorWithOptionalPayload,
  AsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { createAsyncThunk, createSelector } from './toolkit';
import type { RequestFunction } from '@openapi-io-ts/runtime';
import * as T from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import { fold } from 'fp-ts/lib/Either';
import { slices } from './slices/generated';
import type { StringIndexedObject, NewService } from '../types';
import { handleResponse as handleApiResponse } from '../handlers';
import type {
  AsyncThunkActionArgs,
  GeneratedState,
  Payload,
  ThunkAPI,
  Selectors,
  NormalizedEntities,
} from './types';
import {
  getHasVisitedCurrentPagePreviously,
  getPathKey,
} from './selectors/app';
import { InfoEntity } from '../generated/components/schemas';
import { INFO_ENTITY_KEY } from './constants';
import { GetInfoEntityRequestParameters } from '../generated/operations/getInfoEntity';
import { getPageKeyAndId, getPageUrls } from '../middleware';

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
    throw new Error('Invald reducer provided');
  }
  if ((Object.keys(slices) as (keyof typeof slices)[]).indexOf(name) === -1) {
    throw new Error('Invalid reducer provided');
  }

  return name;
};

const handleInfoEntity = async <
  Entity extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  args: { params: GetInfoEntityRequestParameters; forceReload?: boolean },
  method: RequestFunction<Args, Entity>,
  thunkAPI: ThunkAPI,
) => {
  const state = thunkAPI.getState();
  const hasVisitedEntityPagePreviously =
    getHasVisitedCurrentPagePreviously(state);

  const reducer = state[args.params.kind] as NormalizedEntities<Entity>;

  const { forceReload } = args;

  const item = reducer.byId[args.params.id];

  if (!forceReload && hasVisitedEntityPagePreviously && item) {
    return;
  }

  // For each key in InfoEntity, dispatch a fetching action
  const infoEntityKeys = Object.keys(InfoEntity.props) as (keyof InfoEntity)[];

  infoEntityKeys.forEach((key) => {
    const fetchingAction = slices[key].actions.fetching();

    thunkAPI.dispatch(fetchingAction);
  });

  const payload = method(args as unknown as Args);

  const data = await handlePayload(payload as unknown as Payload<InfoEntity>);

  const keys = Object.keys(data) as (keyof InfoEntity)[];

  keys.forEach((key) => {
    const fetchedData = data[key];
    // We have to cast here because it calling it without doing so, results in a type error
    // because typescript infers the type as Company[] & Job[] & Monitor[] etc
    const fetchedAction = slices[key].actions
      .fetched as ActionCreatorWithOptionalPayload<typeof fetchedData>;

    thunkAPI.dispatch(fetchedAction(data[key]));
  });

  return;
};

// Creates an asyncThunkAction for a given service
// This will do the following when the action is called:
// 1. If InfoEntity, place the data in the relevant stores based on the Response
// 2. If not Info Entity, first check the relevant store to see if the data is already fetched
// 2a. If it is, return the data from the store
// 2b. If it is not, fetch the data and place it in the relevant store
export const createAsyncThunkAction = <
  Entity extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  service: NewService<Entity, Args>,
): AsyncThunk<Entity, AsyncThunkActionArgs<Args>, {}> => {
  const { key, method } = service;
  return createAsyncThunk<Entity, AsyncThunkActionArgs<Args>>(
    key,
    async <T>(args: AsyncThunkActionArgs<Args> | void, thunkAPI: ThunkAPI) => {
      const state = thunkAPI.getState() as StringIndexedObject;

      // Special case here because InfoEntity returns an object, with
      // keys corresponding to each entity with arrays in each. So we
      // take all the keys and then call the fetched action for the reducer
      // corresponding to each key
      if (key === INFO_ENTITY_KEY) {
        handleInfoEntity(
          args as unknown as { params: GetInfoEntityRequestParameters },
          method,
          thunkAPI,
        );
        return [] as any;
      }

      const { byId, fetchedList } = state[getReducerName(key) as string];
      const {
        preventLoadingState,
        forceReload,
        onSuccess,
        onError,
        ...methodArgs
      } = args || {
        args: undefined,
      };

      const finalMethodArgs = methodArgs as unknown as Args;

      const isGet = key.includes('get');

      if (isGet && !forceReload) {
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
        const data = await handlePayload(payload as unknown as Payload<Entity>);

        if (onSuccess) {
          onSuccess();
        }

        return data;
      } catch (error) {
        console.log(error);
        if (onError) {
          onError();
        }

        throw error;
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

  const items = isArray ? payload : [payload];

  if (!items.length) {
    return {
      ...state,
      isLoading: false,
      isSubmitting: false,
    };
  }

  const normalizedItems = items.reduce((acc, item) => {
    if (!item) return acc;
    acc[(item as DataWithId).id] = item;
    return acc;
  }, {} as StringIndexedObject<Entity>);

  const { id } = state;

  return {
    id,
    fetchedList: !state.fetchedList ? isArray : true,
    byId: { ...state.byId, ...normalizedItems },
    isLoading: false,
    isSubmitting: false,
  };
};

export const generateSelectors = <
  Entity,
  State extends StringIndexedObject<GeneratedState<Entity>>,
>(
  reducer: keyof State,
): Selectors<Entity, State> => {
  const getReducer = (state: State) => state[reducer];

  const getData = createSelector(getReducer, (reducer) =>
    Object.values(reducer.byId).sort((a, b) =>
      (a as DataWithId).id.localeCompare((b as DataWithId).id),
    ),
  );

  const getById = createSelector(getReducer, (reducer) => reducer.byId);

  const getId = createSelector(getPathKey, (pathKey) => {
    const { key } = getPageKeyAndId(pathKey.path, getPageUrls(pathKey.pages));
    if (pathKey?.page !== key) return undefined;
    return pathKey.id;
  });

  const getItem = createSelector(getId, getById, (id, byId) => byId[id]);

  const getIsLoading = createSelector(
    getReducer,
    (reducer) => reducer.isLoading,
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
    getById,
    getId,
    getItem,
    getIsLoading,
    getIsSubmitting,
    getFetchedList,
  };
};
