import type { RequestFunction } from '@openapi-io-ts/runtime';

declare var process: {
  env: {
    REACT_APP_ENV?: string;
  };
};

export interface AuthenticationHeaders {
  Authorization?: string;
}

export type StringIndexedObject<T = any> = Record<string, T>;

export interface ServiceMethod<T = Function> {
  key: string;
  method: T;
}
