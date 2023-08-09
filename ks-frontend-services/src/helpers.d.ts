import * as operations from './generated/operations';
import type { StringIndexedObject } from './types';
import type { ExtractedError } from './types';
/**
 * Call fetch, including the baseUrl and attaching headers including authentication
 * @param baseURL
 */
export declare const fetchRequestAdapter: (baseURL: string, requireAuth?: boolean) => (url: string, init: StringIndexedObject) => Promise<Response>;
/**
 * Build request functions for operations using baseUrl
 * @param baseURL
 */
export declare const requestFunctions: (baseURL: string) => operations.OperationRequestFunctionMap;
/**
 * Returns a string array of operation keys that we want to define services for.
 * This excludes some generic operations that have no corresponding services
 * @param currentOperations
 */
export declare function getOperationKeys(currentOperations: StringIndexedObject): string[];
/**
 * Gets the operation name from the key. For example: 'jobServiceBuilder'
 * becomes 'job'
 * @param operationKey
 */
export declare function getOperationName(operationKey: string, capitalise?: boolean): string;
/**
 * Gets the error message based on the encoded message passed back from the API.
 * For example:
 * 	error: "code=400, message=Hello world"
 * will return "Hello world"
 */
export declare const extractError: (error: StringIndexedObject | string) => ExtractedError;
