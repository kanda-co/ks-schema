import { AuthenticationHeaders, StringIndexedObject } from './types';
interface IdHeaders {
    'kanda-device-id'?: string;
    'kanda-session-id'?: string;
    'kanda-user-id'?: string;
}
interface Ids {
    deviceId?: string | undefined;
    sessionId?: number | undefined;
    userId?: string | undefined;
}
export declare const buildIds: (ids: Ids) => IdHeaders;
/**
 * Build the needed authorization headers for API requests
 * @param token
 */
export declare const buildAuth: (token: string) => AuthenticationHeaders;
export declare const cleanHeaders: (headers: StringIndexedObject) => StringIndexedObject;
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
