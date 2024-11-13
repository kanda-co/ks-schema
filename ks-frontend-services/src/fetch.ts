import FirebaseAuthService from './auth/FirebaseAuthService';
import type { BrowserClient } from '@amplitude/analytics-types';
import { AuthenticationHeaders, StringIndexedObject } from './types';
import {
  getEventWindowProperties,
  replaceKeyWordValues,
  replacePasswordValues,
  amplitude,
} from '@kanda-libs/ks-amplitude-provider';
import { APP_ENV } from './config';
import { OperationArgs } from './store/types';

interface Request extends StringIndexedObject {
  headers: StringIndexedObject & AuthenticationHeaders;
}

interface IdHeaders {
  'kanda-device-id'?: string;
  'kanda-session-id'?: string;
  'kanda-user-id'?: string;
}

interface FetchArgs {
  input: RequestInfo | URL;
  init?: RequestInit;
}

interface Ids {
  deviceId?: string | undefined;
  sessionId?: number | undefined;
  userId?: string | undefined;
}

const currentWindow = typeof window !== 'undefined' ? window : {};

export const buildIds = (ids: Ids): IdHeaders => ({
  ...(ids?.deviceId
    ? {
        'kanda-device-id': ids.deviceId,
      }
    : {}),
  ...(ids?.sessionId
    ? {
        'kanda-session-id': ids.sessionId.toString(),
      }
    : {}),
  ...(ids?.userId
    ? {
        'kanda-user-id': ids.userId,
      }
    : {}),
});

/**
 * Build the needed authorization headers for API requests
 * @param token
 */
export const buildAuth = (token: string): AuthenticationHeaders => ({
  Authorization: token ? `Bearer ${token}` : '',
});

export const cleanHeaders = (
  headers: StringIndexedObject,
): StringIndexedObject =>
  Object.keys(headers).reduce((final: StringIndexedObject, current: string) => {
    if (!headers?.[current] || headers?.[current] === 'undefined') return final;
    return {
      ...final,
      [current]: headers[current],
    };
  }, {});

export const addReferrerHeader = (): HeadersInit => ({
  ...(window?.location?.href
    ? { 'x-kanda-referer': window.location.href }
    : {}),
});

export const addDevHeader = (devHeader: boolean): HeadersInit => {
  const subdomain = window.location.hostname.split('.')[0];
  const dev = devHeader || subdomain.includes('dev');
  return dev
    ? {
        'x-kanda-env': 'dev',
      }
    : {};
};

/**
 * Build the needed headers for API requests, including any needed auth
 * @param init
 * @param token
 */
const buildRequestHeaders = (
  init: StringIndexedObject,
  token?: string,
  ids?: Ids,
  devHeader?: boolean,
): Request => ({
  ...init,
  headers: {
    ...cleanHeaders(init.headers || {}),
    ...addReferrerHeader(),
    ...addDevHeader(devHeader),
    ...(token ? buildAuth(token) : {}),
    ...(ids ? buildIds(ids) : {}),
  },
});

export const getIds = (amplitude?: BrowserClient): Ids => {
  if (!amplitude)
    return {
      deviceId: undefined,
      sessionId: undefined,
      userId: undefined,
    };
  return {
    deviceId: amplitude.getDeviceId(),
    sessionId: amplitude.getSessionId(),
    userId: amplitude.getUserId(),
  };
};

const UUID_REGEX =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const HUB_URL_REGEX = /https:\/\/hub(-qa)?\.kanda\.co\.uk\//gm;

export const formatTrackingBody = (
  inputUrl: string,
  options: StringIndexedObject,
): StringIndexedObject => {
  const domain = new URL(inputUrl)?.origin;
  const url = inputUrl.replace(HUB_URL_REGEX, '');
  const parts = url.split('/');
  const containsUUID = parts.some((part) => UUID_REGEX.test(part));

  const resource = parts?.[1] || '*';
  const resourceId = containsUUID ? parts?.[2] || '*' : '*';
  const action = containsUUID ? parts?.[3] || '*' : parts?.[2] || '*';

  const { method, body } = options;
  const { path, referrer, params } = getEventWindowProperties();

  const resourceData = body
    ? JSON.stringify(
        replaceKeyWordValues(replacePasswordValues(JSON.parse(body))),
      )
    : null;

  return {
    domain,
    url: `/${url}`,
    path,
    referrer,
    ...(params && { params }),
    api: {
      method,
      resource,
      resource_id: resourceId,
      action,
      ...(resourceData && { resource_data: resourceData }),
    },
  };
};

export const originalFetch = () => fetch.bind(currentWindow);

/**
 * Alter the fetch method so that it will automatically retry the request
 * with a refreshed token upon a request returning a 403 response.
 * @param url
 * @param options
 * @param args
 */
const interceptedFetch = async (
  url: string,
  options: StringIndexedObject,
  operationArgs: OperationArgs = {},
  ...args
) => {
  const id = FirebaseAuthService?.auth?.currentUser?.uid;
  const token =
    global?.token ||
    (await FirebaseAuthService?.auth?.currentUser?.getIdToken(true));

  const trackingBody = formatTrackingBody(url, options);
  const ids = getIds(amplitude);

  const devHeader = operationArgs?.useDevHeader;

  amplitude?.track('api-attempted', trackingBody);
  amplitude?.flush();

  const headers = buildRequestHeaders(options, token, ids, devHeader);

  return originalFetch()
    .apply(currentWindow, [url, headers, ...args])
    .then(async (data) => {
      if (data.status === 403) {
        if (APP_ENV === 'qa')
          console.log('Unauthorised request, refreshing token');

        if (!token) {
          const newToken = await FirebaseAuthService.token();
          if (APP_ENV === 'qa') console.log('Token refreshed');
          return originalFetch().apply(currentWindow, [
            url,
            buildRequestHeaders(options, newToken, ids),
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
