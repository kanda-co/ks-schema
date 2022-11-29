import { AuthenticationHeaders, StringIndexedObject } from './types';
interface Request extends StringIndexedObject {
    headers: StringIndexedObject & AuthenticationHeaders;
}
/**
 * Build the needed authorization headers for API requests
 * @param token
 */
export declare const buildAuth: (token: string) => AuthenticationHeaders;
/**
 * Build the needed headers for API requests, including any needed auth
 * @param init
 * @param token
 */
export declare const buildRequestHeaders: (init: StringIndexedObject, token: string) => Request;
export declare const originalFetch: () => any;
/**
 * Alter the fetch method so that it will automatically retry the request
 * with a refreshed token upon a request returning a 403 response.
 * @param url
 * @param options
 * @param args
 */
declare const interceptedFetch: (url: string, options: StringIndexedObject, ...args: any[]) => any;
export default interceptedFetch;
