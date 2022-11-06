import { TaskEither, tryCatch, fromEither, chain } from 'fp-ts/lib/TaskEither';
import { Either, right, left } from 'fp-ts/lib/Either';
import { flow } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';
import { fetchRequestAdapter } from '../../helpers';
import { StringIndexedObject } from 'types';

type RequestAdapter = (
  url: string,
  options: StringIndexedObject,
) => Promise<Response>;

const safeResponse = (
  url: string,
  requestAdapter: RequestAdapter,
  options: StringIndexedObject = {},
): TaskEither<Error, Response> =>
  tryCatch(
    () => requestAdapter(url, options),
    (reason) => {
      return new Error(String(reason));
    },
  );

const processResponse = flow((response: Response): Either<Error, Response> => {
  return response.status === 200
    ? right(response)
    : left(Error(response.statusText));
}, fromEither);

export const createGetter = (baseUrl: string) => {
  const requestAdapter = fetchRequestAdapter(baseUrl, false);

  return (url: string): TaskEither<Error, Response> =>
    pipe(safeResponse(url, requestAdapter), chain(processResponse));
};

export const createPoster = (baseUrl: string) => {
  const requestAdapter = fetchRequestAdapter(baseUrl, false);

  return (
    url: string,
    body: StringIndexedObject = {},
  ): TaskEither<Error, Response> =>
    pipe(
      safeResponse(url, requestAdapter, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      }),
      chain(processResponse),
    );
};
