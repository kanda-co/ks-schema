import * as operations from 'generated/operations';
import { StringIndexedObject } from './types';
import fetch from './fetch';

/**
 * Call fetch, including the baseUrl and attaching headers including authentication
 * @param baseURL
 */
const fetchRequestAdapter =
  (baseURL: string) =>
  async (url: string, init: StringIndexedObject): Promise<Response> => {
    return fetch(`${baseURL}${url}`, init);
  };

/**
 * Build request functions for operations using baseUrl
 * @param baseURL
 */
export const requestFunctions = (baseURL) =>
  operations.requestFunctionsBuilder(fetchRequestAdapter(baseURL));
