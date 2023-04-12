export * from './handlers';
export * from './hooks';
export * from './service';
export * from './auth';
export * from './lib';

export { default as services } from './service';

export { loadServerData } from './service/helpers';

export { type OperationRequestFunctionMap } from './generated/operations';

export * from './generated/components/schemas';

export * as slices from './store/slices/';
export * as actions from './store/slices/actions';

export type {
  Payload,
  PathKey,
  NormalizedEntities,
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
