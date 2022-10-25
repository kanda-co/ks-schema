import { RequestFunction } from '@openapi-io-ts/runtime';

declare var process: {
  env: {
    REACT_APP_ENV?: string;
  };
};

export interface AuthenticationHeaders {
  Authorization?: string;
}

export type StringIndexedObject<T = any> = Record<string, T>;

export type ServiceMethod<
  T extends StringIndexedObject,
  V extends StringIndexedObject,
> = RequestFunction<{ params: V }, T>;

export interface Service<
  T extends StringIndexedObject,
  V extends StringIndexedObject,
> {
  key: string;
  method: ServiceMethod<T, V>;
}

export interface ServiceParams<T extends StringIndexedObject> {
  params: T;
}
export interface ServiceMethodReturnParams<T> {
  data?: T;
  error?: string;
}

export type ServiceSubmit<
  T extends StringIndexedObject,
  V extends StringIndexedObject,
> = (params: ServiceParams<V>) => Promise<ServiceMethodReturnParams<T>>;

export type ServiceMethodReturn<T> = Promise<ServiceMethodReturnParams<T>>;
