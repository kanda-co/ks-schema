import { FirebaseAuthService } from './auth';
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

const UUID_REGEX =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const formatTrackingBody = (inputUrl: string, options: StringIndexedObject) => {
  const url = inputUrl.replace(/https?:\/\/hub\-qa?.kanda.co.uk\//gm, '');
  const parts = url.split('/');
  const containsUUID = parts.some((part) => UUID_REGEX.test(part));

  const resource = parts?.[1] || '*';
  const resourceId = containsUUID ? parts?.[2] || '*' : '*';
  const action = containsUUID ? parts?.[3] || '*' : parts?.[2] || '*';

  const { method, body } = options;

  return {
    url: `/${url}`,
    api: {
      method,
      resource,
      resource_id: resourceId,
      action,
    },
    body,
  };
};

export const originalFetch = () => fetch.bind(window);

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
  console.log(FirebaseAuthService?.auth);

  const trackingBody = formatTrackingBody(url, options);
  console.log(trackingBody);

  return originalFetch()
    .apply(window, [url, buildRequestHeaders(options, token), ...args])
    .then(async (data) => {
      console.log(data);
      if (data.status === 403) {
        console.log('Unauthorised request, refreshing token');

        if (!token) {
          const newToken = await FirebaseAuthService.token();

          console.log('Token refreshed');

          return originalFetch().apply(window, [
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
