import * as operations from './generated/operations';
import type {
  ServiceMethod,
  StringIndexedObject,
  ServiceParams,
} from './types';
import fetch, { originalFetch } from './fetch';
import { handleResponse, type Response as ServiceResponse } from 'handlers';

/**
 * Call fetch, including the baseUrl and attaching headers including authentication
 * @param baseURL
 */
export const fetchRequestAdapter = (baseURL: string, requireAuth = true) => {
  const fetchToUse = requireAuth ? fetch : originalFetch();

  return async (url: string, init: StringIndexedObject): Promise<Response> => {
    return fetchToUse(`${baseURL}${url}`, init);
  };
};

/**
 * Build request functions for operations using baseUrl
 * @param baseURL
 */
export const requestFunctions = (baseURL: string) =>
  operations.requestFunctionsBuilder(fetchRequestAdapter(baseURL));

/**
 * Helper function used to request data from a service whilst running on the server / node
 */
export const loadServerData = async <
  Value,
  Params = undefined,
  Body = undefined,
>(
  serviceMethod: ServiceMethod<Value, Params, Body>,
  args: ServiceParams<Params, Body>[],
) => {
  const method = serviceMethod || (() => () => {});
  const fetcher = () =>
    (method(...args)() as unknown as Promise<Response>).then((res) =>
      handleResponse(res as unknown as any),
    );

  return fetcher();
};
