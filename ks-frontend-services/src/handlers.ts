import { amplitude } from '@kanda-libs/ks-amplitude-provider';
import * as fp from 'fp-ts';
import { APP_ENV } from './config';
import { formatTrackingBody } from './fetch';
import { StringIndexedObject } from './types';

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
      async (error: Error) => {
        if (APP_ENV === 'qa') {
          const e = error as StringIndexedObject;
          const tag = e?._tag;
          if (tag && tag === 'DecodeError') {
            console.log(
              'DecodeError',
              e?.errors?.length || 0,
              'First 10:',
              e?.errors?.slice(0, 10),
            );
          }
        }
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
