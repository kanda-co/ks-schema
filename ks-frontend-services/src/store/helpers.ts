import type {
  ActionCreatorWithOptionalPayload,
  AsyncThunk,
  PayloadAction,
  EntityAdapter,
} from '@reduxjs/toolkit';
import { createAsyncThunk, createSelector } from './toolkit';
import type { RequestFunction } from '@openapi-io-ts/runtime';
import * as T from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import { fold } from 'fp-ts/lib/Either';
import { slices } from './slices/generated';
import type { StringIndexedObject, NewService, ExtractedError } from '../types';
import { handleResponse as handleApiResponse } from '../handlers';
import type {
  AsyncThunkActionArgs,
  Payload,
  ThunkAPI,
  Selectors,
  GeneratedState,
} from './types';
import {
  getHasVisitedCurrentPagePreviously,
  getPathKey,
} from './selectors/app';
import {
  InfoEntity,
  InfoSearch,
  SearchIndex,
} from '../generated/components/schemas';
import { INFO_ENTITY_KEY, INFO_SEARCH_KEY } from './constants';
import { GetInfoEntityRequestParameters } from '../generated/operations/getInfoEntity';
import { extractError } from '../helpers';
import { operations } from '../generated/operations';

export const handlePayload = <T>(payload: Payload<T>): Promise<T> =>
  payload().then(handleApiResponse) as Promise<T>;

export type DataWithId = {
  id: string;
};

export type EntityWithId<Entity> = Entity & DataWithId;

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

export const entityContainsId = <Entity>(
  data: Entity,
): data is EntityWithId<Entity> =>
  (data as EntityWithId<Entity>)?.id !== undefined;

const getReducerName = (key: string): keyof typeof slices => {
  const [reducerName, singleActionName] = key.split('.');

  const name = reducerName as keyof typeof slices;
  const sName = singleActionName as keyof typeof slices;

  if (!reducerName && !sName) {
    throw new Error('Invalid reducer provided');
  }

  if (
    (Object.keys(slices) as (keyof typeof slices)[]).indexOf(name) === -1 &&
    (Object.keys(slices) as (keyof typeof slices)[]).indexOf(sName) === -1
  ) {
    throw new Error('Invalid reducer provided');
  }

  if ((Object.keys(slices) as (keyof typeof slices)[]).indexOf(name) === -1) {
    return sName;
  }

  return name;
};

const getHasAlreadySearchedBody = (
  body: InfoSearch,
  thunkAPI: ThunkAPI,
): boolean => {
  const state = thunkAPI.getState();
  const previous = state['infoSearch'] as GeneratedState<InfoSearch>;
  const raw = previous.raw as InfoSearch | undefined;
  if (!raw) return false;
  const { q: previousQ, index: previousIndex } = raw;
  const { q, index } = body;
  if (
    q === previousQ &&
    index.length === previousIndex.length &&
    index.every((searchIndex) => previousIndex.includes(searchIndex))
  )
    return true;
  return false;
};

const handleInfoSearchInit = async <
  Entity extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  args: { body: InfoSearch; forceReload?: boolean },
  thunkAPI: ThunkAPI,
) => {
  const { body, forceReload } = args;
  const indexKeys = body.index;

  const hasAlreadySearchedBody = getHasAlreadySearchedBody(body, thunkAPI);

  if (hasAlreadySearchedBody && !forceReload) return;

  indexKeys.forEach((key: SearchIndex) => {
    const fetchingAction = slices[key].actions.fetching();
    thunkAPI.dispatch(fetchingAction);
  });
};

const handleInfoSearchSuccess = async <
  Entity extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  data: InfoSearch,
  args: { body: InfoSearch },
  thunkAPI: ThunkAPI,
) => {
  const indexKeys = args.body.index;

  indexKeys.forEach((key: SearchIndex) => {
    const fetchedData = data.hits[key];
    // We have to cast here because it calling it without doing so, results in a type error
    // because typescript infers the type as Company[] & Job[] & Monitor[] etc
    const fetchedAction = slices[key].actions
      .fetched as ActionCreatorWithOptionalPayload<typeof fetchedData>;

    thunkAPI.dispatch(fetchedAction(fetchedData));
  });
};

const handleInfoSearchError = async <
  Entity extends StringIndexedObject | undefined | void,
  Args extends StringIndexedObject<any> | undefined = undefined,
>(
  args: { body: InfoSearch },
  thunkAPI: ThunkAPI,
) => {
  const indexKeys = args.body.index;

  indexKeys.forEach((key: SearchIndex) => {
    const errorAction = slices[key].actions.error();
    thunkAPI.dispatch(errorAction);
  });
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

  const reducer = state[args.params.kind] as GeneratedState<Entity>;

  const { forceReload } = args;

  const item = reducer.entities[args.params.id];

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

    thunkAPI.dispatch(fetchedAction(fetchedData));
  });

  return;
};

// Checks if operation is a GET operation by finding the
// generated operation from the redux key. If the operation
// can't be found, the name is checked for if it starts
// with 'get', else if it is found the method is checked
export const checkMethodIsGet = (key: string): boolean => {
  const operationName = key.split('.').slice(-1)[0];
  const operation = operations?.[operationName];
  if (!operation) return operationName.startsWith('get');
  return operation?.method === 'get';
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
): AsyncThunk<Entity, AsyncThunkActionArgs<Args, Entity>, {}> => {
  const { key, method } = service;
  return createAsyncThunk<Entity, AsyncThunkActionArgs<Args, Entity>>(
    key,
    async <T>(
      args: AsyncThunkActionArgs<Args, Entity> | void,
      thunkAPI: ThunkAPI,
    ) => {
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

      if (key === INFO_SEARCH_KEY) {
        handleInfoSearchInit(args as unknown as { body: InfoSearch }, thunkAPI);
      }

      const { entities, fetchedList } = state[getReducerName(key) as string];
      const {
        preventLoadingState,
        forceReload = false,
        chainedRequest = false,
        onSuccess,
        onError,
        ...methodArgs
      } = args || {
        args: undefined,
      };

      // Dispatch the chainedRequest action to prevent changing the loading state
      // if chainedRequest is true
      if (chainedRequest) {
        const chainedRequestAction = slices[getReducerName(key)].actions
          .chainedRequest as ActionCreatorWithOptionalPayload<undefined>;

        thunkAPI.dispatch(chainedRequestAction());
      }

      const finalMethodArgs = methodArgs as unknown as Args;
      const isGet = checkMethodIsGet(key);

      if (isGet && !forceReload) {
        if (finalMethodArgs?.params?.id) {
          const item = entities[finalMethodArgs.params.id];
          // If the data is already in the store, don't fetch it again
          if (item) {
            if (onSuccess) {
              onSuccess(item);
            }
            return item;
          }
        } else if (fetchedList) {
          const items = Object.values(entities);
          if (onSuccess) {
            onSuccess(items as unknown as Entity);
          }
          return items;
        }
      }

      const payload = method(finalMethodArgs);

      try {
        const data = await handlePayload(payload as unknown as Payload<Entity>);

        if (onSuccess) onSuccess(data);

        if (key === INFO_SEARCH_KEY)
          handleInfoSearchSuccess(
            data as InfoSearch,
            args as unknown as { body: InfoSearch },
            thunkAPI,
          );

        return data;
      } catch (error) {
        const extractedError = extractError(error);

        if (key === INFO_SEARCH_KEY)
          handleInfoSearchError(
            args as unknown as { body: InfoSearch },
            thunkAPI,
          );

        // Dispatch the error action for the relevant reducer
        // and throw the error so that the caller can handle it
        const errorAction = slices[getReducerName(key)].actions
          .error as ActionCreatorWithOptionalPayload<ExtractedError>;

        thunkAPI.dispatch(errorAction(extractedError));

        // If the onError callback is provided, call it with the extracted error
        if (onError) {
          onError({
            code: extractedError.code || error.code,
            message: extractedError.message,
          });
        }

        throw extractedError;
      }
    },
  );
};

/**
 * This function is passed to the reducers that are defined for the async thunk actions
 * in the generated slices. It takes an entityAdapter and returns a function that
 * takes the state and action and returns the new state.
 */
export const createResponseHandler =
  <State extends GeneratedState<Entity>, Entity>(
    entityAdapter: EntityAdapter<Entity>,
  ) =>
  (state: State, action: PayloadAction<Entity | Entity[]>) => {
    const { payload } = action;

    const isArray = isArrayOfValue<Entity>(payload);
    const hasId = entityContainsId<Entity>(isArray ? payload[0] : payload);

    const items = isArray ? payload : [payload];

    if (!items.length) {
      return {
        ...state,
        error: undefined,
        hasFetched: true,
        isLoading: false,
        isSubmitting: false,
      };
    }

    const nextState = { ...state };

    if (hasId) {
      const result = isArray
        ? entityAdapter.upsertMany(nextState, payload)
        : entityAdapter.upsertOne(nextState, payload);

      return {
        ...result,
        error: undefined,
        chainedRequest: false,
        hasFetched: true,
        fetchedList: !state.fetchedList ? isArray : true,
        isLoading: state.chainedRequest ? state.isLoading : false,
        isSubmitting: state.chainedRequest ? state.isSubmitting : false,
      };
    }

    if (!isArray) {
      const result = entityAdapter.upsertOne(nextState, payload);
      return {
        ...result,
        error: undefined,
        raw: payload,
        chainedRequest: false,
        hasFetched: true,
        fetchedList: !state.fetchedList ? isArray : true,
        isLoading: state.chainedRequest ? state.isLoading : false,
        isSubmitting: state.chainedRequest ? state.isSubmitting : false,
      };
    }

    return {
      ...nextState,
      error: undefined,
      raw: payload,
      chainedRequest: false,
      hasFetched: true,
      fetchedList: !state.fetchedList ? isArray : true,
      isLoading: state.chainedRequest ? state.isLoading : false,
      isSubmitting: state.chainedRequest ? state.isSubmitting : false,
    };
  };

/**
 * As above, this function is passed to a reducer, but it handles a void response
 */
export const createVoidResponseHandler =
  <State extends GeneratedState>() =>
  (state: State, action: PayloadAction<void>) => {
    return {
      ...state,
      error: undefined,
      chainedRequest: false,
      fetchedList: false,
      hasFetched: true,
      isLoading: state.chainedRequest ? state.isLoading : false,
      isSubmitting: state.chainedRequest ? state.isSubmitting : false,
    };
  };

export const generateSelectors = <
  Entity,
  State extends StringIndexedObject<GeneratedState<Entity>>,
>(
  reducer: keyof State,
  entityAdapter: EntityAdapter<Entity>,
): Selectors<Entity, State> => {
  const selectors = entityAdapter.getSelectors();

  const getReducer = (state: State) => state[reducer];

  const getEntitiesAsArray = createSelector(getReducer, (reducer) =>
    selectors.selectAll(reducer),
  );

  const getEntities = createSelector(getReducer, (reducer) =>
    selectors.selectEntities(reducer),
  );

  const getId = createSelector(getPathKey, (pathKey) => pathKey.id);

  const getEntity = createSelector(
    getId,
    getEntities,
    (id, entities) => entities[id],
  );

  const getIsLoading = createSelector(
    getReducer,
    (reducer) => reducer.isLoading,
  );

  const getHasFetched = createSelector(
    getReducer,
    (reducer) => reducer.hasFetched,
  );

  const getIsSubmitting = createSelector(
    getReducer,
    (reducer) => reducer.isSubmitting,
  );

  const getFetchedList = createSelector(
    getReducer,
    (reducer) => reducer.fetchedList,
  );

  const getRawResponse = createSelector(getReducer, (reducer) => reducer.raw);

  const getError = createSelector(getReducer, (reducer) => reducer.error);

  return {
    getReducer,
    getEntitiesAsArray,
    getEntities,
    getId,
    getEntity,
    getIsLoading,
    getHasFetched,
    getIsSubmitting,
    getFetchedList,
    getError,
    getRawResponse,
  };
};
