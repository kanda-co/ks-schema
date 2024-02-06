import { amplitude } from '@kanda-libs/ks-amplitude-provider';
import * as fp from 'fp-ts';
import { APP_ENV } from './config';
import { formatTrackingBody } from './fetch';

type Error = {
  response: {
    json: () => Promise<unknown>;
    url: string;
  };
};

interface ResponseBody<T = unknown> {
  data: T;
  json: () => Promise<T>;
  response: {
    url: string;
  };
}

export type Response<T = unknown> = fp.either.Either<Error, ResponseBody<T>>;

export function handleResponse<T = unknown>(response: Response<T>) {
  return new Promise((resolve, reject) =>
    fp.either.fold(
      async (error: Error, ...args) => {
        console.log('error', error, { args });
        if (APP_ENV === 'qa') console.log('Error:', error);

        if (error?.response?.url) {
          const trackingBody = formatTrackingBody(error.response.url, error);

          amplitude?.track('api-failed', trackingBody);
          amplitude?.flush();
        }

        if (error.response) {
          reject(await error.response.json());
        } else {
          reject(error);
        }
      },
      async (r: ResponseBody) => {
        console.log('success', r.response?.url);
        if (r.data) {
          resolve(r.data);

          if (r.response?.url) {
            const trackingBody = formatTrackingBody(r.response.url, r.data);

            amplitude?.track('api-succeeded', trackingBody);
            amplitude?.flush();
          }
          return;
        }

        const data = await r.json();

        if (r.response?.url) {
          const trackingBody = formatTrackingBody(r.response.url, data);

          amplitude?.track('api-succeeded', trackingBody);
          amplitude?.flush();
        }

        resolve(data);
      },
    )(response),
  );
}
