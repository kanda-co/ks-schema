import * as operations from './generated/operations';
import type { StringIndexedObject } from './types';
import fetch, { originalFetch } from './fetch';
import { RECAPTCHA_SITE_KEY } from './config';
import type { ExtractedError } from './types';
import { OperationArgs } from './store/types';

const handleProtectedRequest = async (
  init: StringIndexedObject,
): Promise<StringIndexedObject> => {
  const token = await window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, {
    action: 'signup',
  });

  const { body } = init;
  const { protectedRequest, ...formattedBody } = JSON.parse(body || '{}');

  const formattedInit: StringIndexedObject = {
    ...init,
    headers: {
      ...(init.headers || {}),
      'x-kanda-rctoken': token,
    },
  };

  if (formattedBody) {
    formattedInit.body = JSON.stringify(formattedBody);
  }

  return formattedInit;
};

/**
 * Call fetch, including the baseUrl and attaching headers including authentication
 * @param baseURL
 */
export const fetchRequestAdapter = (
  baseURL: string,
  requireAuth = true,
  operationArgs: OperationArgs = {},
) => {
  const fetchToUse = requireAuth ? fetch : originalFetch();
  return async (url: string, init: StringIndexedObject): Promise<Response> => {
    const protectedRequest = Object.keys(init.headers || {}).includes(
      'x_kanda_protected',
    );
    if (protectedRequest)
      return fetchToUse(
        `${baseURL}${url}`,
        await handleProtectedRequest(init),
        operationArgs,
      );

    return fetchToUse(`${baseURL}${url}`, init, operationArgs);
  };
};

/**
 * Build request functions for operations using baseUrl
 * @param baseURL
 */
export const requestFunctions = (
  baseURL: string,
  operationArgs?: OperationArgs,
) =>
  operations.requestFunctionsBuilder(
    fetchRequestAdapter(baseURL, true, operationArgs),
  );

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

/**
 * Gets the error message based on the encoded message passed back from the API.
 * For example:
 * 	error: "code=400, message=Hello world"
 * will return "Hello world"
 */
export const extractError = (
  error: StringIndexedObject | string,
): ExtractedError => {
  const unknownError = { message: 'Unknown error' };

  if (typeof error === 'string') return { message: error };
  if (!error.message) return unknownError;

  if (
    ['code', 'message'].every((key: string) => Object.keys(error).includes(key))
  )
    return error as ExtractedError;

  const mapping = error.message
    .split(', ')
    .reduce((errorObj: StringIndexedObject, part: string) => {
      const parts = part.split('=');
      if (parts.length !== 2) return errorObj;
      return {
        ...errorObj,
        [parts[0]]: parts[0] === 'code' ? parseInt(parts[1], 10) : parts[1],
      };
    }, {});
  if (Object.keys(mapping).length === 0) return unknownError;
  if (!mapping.message) return unknownError;

  return mapping as ExtractedError;
};
