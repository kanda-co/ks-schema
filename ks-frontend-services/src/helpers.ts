import * as operations from './generated/operations';
import { StringIndexedObject } from './types';
import fetch, { originalFetch } from './fetch';

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
export const requestFunctions = (baseURL) =>
  operations.requestFunctionsBuilder(fetchRequestAdapter(baseURL));
