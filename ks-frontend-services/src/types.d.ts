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

export interface ServiceParams<
  Params extends StringIndexedObject,
  Body extends StringIndexedObject,
> {
  params: Params;
  body: Body;
}

export type ServiceMethod<
  Value extends StringIndexedObject,
  Params extends StringIndexedObject,
  Body extends StringIndexedObject,
> = RequestFunction<ServiceParams<Params, Body>, Value>;

export interface Service<
  Value extends StringIndexedObject,
  Params extends StringIndexedObject,
  Body extends StringIndexedObject,
> {
  key: string;
  method: ServiceMethod<Value, Params, Body>;
}

export interface ServiceMethodReturnParams<T> {
  data?: T;
  error?: string;
}

export type ServiceSubmit<
  Value extends StringIndexedObject,
  Params extends StringIndexedObject,
  Body extends StringIndexedObject,
> = (
  args: Partial<ServiceParams<Params, Body>>,
) => Promise<ServiceMethodReturnParams<Value>>;

export type ServiceMethodReturn<T> = Promise<ServiceMethodReturnParams<T>>;
