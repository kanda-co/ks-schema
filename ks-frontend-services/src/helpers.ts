import * as operations from './generated/operations';
import type { StringIndexedObject } from './types';
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
export const requestFunctions = (baseURL: string) =>
  operations.requestFunctionsBuilder(fetchRequestAdapter(baseURL));

/**
 * Returns a string array of operation keys that we want to define services for.
 * This excludes some generic operations that have no corresponding services
 * @param currentOperations
 */
export function getOperationKeys(
  currentOperations: StringIndexedObject,
): string[] {
  const keys = Object.keys(currentOperations);

  return keys.filter(
    (key) => ['operations', 'requestFunctionsBuilder'].indexOf(key) === -1,
  );
}

/**
 * Gets the operation name from the key. For example: 'jobServiceBuilder'
 * becomes 'job'
 * @param operationKey
 */
export function getOperationName(
  operationKey: string,
  capitalise = false,
): string {
  const key = operationKey.replace('ServiceBuilder', '');

  return capitalise ? key.charAt(0).toUpperCase() + key.slice(1) : key;
}
