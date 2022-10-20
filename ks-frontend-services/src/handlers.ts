import { fold, Either } from 'fp-ts/Either';

interface Error {
  response: {
    json: () => Promise<unknown>;
  };
}

interface ResponseBody {
  data: unknown;
  json: () => Promise<unknown>;
}

export type Response = Either<Error, ResponseBody>;

export const handleResponse = (response: Response) =>
  new Promise((resolve, reject) =>
    fold(
      async (error: Error) => {
        console.log('Error:', error);
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
