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

export interface ServiceParams<Params, Body> {
  params: Params;
  body: Body;
}

export type ServiceMethod<Value, Params, Body> = RequestFunction<
  ServiceParams<Params, Body>,
  Value
>;

export interface Service<Method> {
  key: string;
  method: Method;
}

export interface ServiceMethodReturnParams<T> {
  data?: T;
  error?: StringIndexedObject | string;
}

export type ServiceSubmit<Value, Params, Body> = (
  args: Partial<ServiceParams<Params, Body>>,
) => Promise<ServiceMethodReturnParams<Value>>;

export type ServiceMethodReturn<T> = Promise<ServiceMethodReturnParams<T>>;
