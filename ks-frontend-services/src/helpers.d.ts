import * as operations from './generated/operations';
import { StringIndexedObject } from './types';
/**
 * Call fetch, including the baseUrl and attaching headers including authentication
 * @param baseURL
 */
export declare const fetchRequestAdapter: (baseURL: string, requireAuth?: boolean) => (url: string, init: StringIndexedObject) => Promise<Response>;
/**
 * Build request functions for operations using baseUrl
 * @param baseURL
 */
export declare const requestFunctions: (baseURL: any) => operations.OperationRequestFunctionMap;
