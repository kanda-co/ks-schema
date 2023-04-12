import { fold, Either } from 'fp-ts/Either';
import { APP_ENV } from './config';

interface Error {
  response: {
    json: () => Promise<unknown>;
  };
}

interface ResponseBody<T = unknown> {
  data: T;
  json: () => Promise<T>;
}

export type Response<T = unknown> = Either<Error, ResponseBody<T>>;

export const handleResponse = (response: Response) =>
  new Promise((resolve, reject) =>
    fold(
      async (error: Error) => {
        if (APP_ENV === 'qa') console.log('Error:', error);
        if (error.response) {
          reject(await error.response.json());
        } else {
          reject(error);
        }
      },
      async (r: ResponseBody) => {
        if (r.data) {
          resolve(r.data);

          return;
        }

        resolve(await r.json());
      },
    )(response),
  );
