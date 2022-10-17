import { TaskEither, tryCatch, fromEither, chain } from 'fp-ts/lib/TaskEither';
import { Either, right, left } from 'fp-ts/lib/Either';
import { flow } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';
import { fetchRequestAdapter } from '../../helpers';

type RequestAdapter = (url: string, opts: {}) => Promise<Response>;

const safeResponse = (
  url: string,
  requestAdapter: RequestAdapter,
): TaskEither<Error, Response> =>
  tryCatch(
    () => requestAdapter(url, {}),
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
  const requestAdapter = fetchRequestAdapter(baseUrl);

  return (url: string): TaskEither<Error, Response> =>
    pipe(safeResponse(url, requestAdapter), chain(processResponse));
};
