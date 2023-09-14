export * from './handlers';
export * from './hooks';
export * from './service';
export * from './auth';
export * from './lib';
export * from './utils';

export { default as services } from './service';

export { createAppDispatchHook } from './hooks/useAppDispatch';
export { createCurrentUserHook } from './hooks/useCurrentUser';

export { loadServerData } from './service/helpers';

export { type OperationRequestFunctionMap } from './generated/operations';

export * from './generated/components/schemas';

export { createStore, createSelectors } from './store';
export * as slices from './store/slices/generated/';
export * as actions from './store/slices/generated/actions';
export { revalidateUser, logout, userLoggedIn } from './store/slices/auth';
export * from './store/toolkit';
export { createAppSlice } from './store/slices/app';
export { default as auth } from './store/slices/auth';
export * as allSlices from './store/slices/generated';
export { getSelectors } from './store/selectors';

export {
  createRoutedApp,
  createMiddleware,
  pathKeyToLoadingDependencies,
  fetchPageInitialData,
} from './middleware';
export { createAction } from './middleware/helpers';

export type {
  Payload,
  PathKey,
  AsyncThunkReturnType,
  ThunkAPI,
  SharedAsyncThunkActionArgs,
  AsyncThunkActionArgs,
} from './store/types';

export type {
  Service,
  ServiceParams,
  ServiceMethod,
  ServiceSubmit,
  ServiceMethodReturnParams,
  NewService,
} from './types';

export type {
  RequestFunction,
  RequestFunctionArgs,
} from '@openapi-io-ts/runtime';

export type { KeyedMutator } from 'swr';
