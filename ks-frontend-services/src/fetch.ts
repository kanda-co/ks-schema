import FirebaseAuthService from './auth/FirebaseAuthService';
import { AuthenticationHeaders, StringIndexedObject } from './types';

interface Request extends StringIndexedObject {
  headers: StringIndexedObject & AuthenticationHeaders;
}

/**
 * Build the needed authorization headers for API requests
 * @param token
 */
export const buildAuth = (token: string): AuthenticationHeaders => ({
  Authorization: token ? `Bearer ${token}` : '',
});

/**
 * Build the needed headers for API requests, including any needed auth
 * @param init
 * @param token
 */
export const buildRequestHeaders = (
  init: StringIndexedObject,
  token: string,
): Request => ({
  ...init,
  headers: {
    ...init.headers,
    ...(token ? buildAuth(token) : {}),
  },
});

interface FetchArgs {
  input: RequestInfo | URL;
  init?: RequestInit;
}

const originalFetch = fetch.bind(window);

/**
 * Alter the fetch method so that it will automatically retry the request
 * with a refreshed token upon a request returning a 403 response.
 * @param url
 * @param options
 * @param args
 */
const interceptedFetch = (
  url: string,
  options: StringIndexedObject,
  ...args
) => {
  const token = FirebaseAuthService?.auth?.currentUser?.accessToken;

  return originalFetch
    .apply(window, [url, buildRequestHeaders(options, token), ...args])
    .then(async (data) => {
      if (data.status === 403) {
        console.log('Unauthorised request, refreshing token');

        if (!token) {
          const newToken = await FirebaseAuthService.token();

          console.log('Token refreshed');

          return originalFetch.apply(window, [
            url,
            buildRequestHeaders(options, newToken),
            ...args,
          ]);
        }

        return data;
      } else {
        return data;
      }
    });
};

export default interceptedFetch;
