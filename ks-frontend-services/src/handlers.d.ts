import * as fp from 'fp-ts';
interface Error {
    response: {
        json: () => Promise<unknown>;
    };
}
interface ResponseBody<T = unknown> {
    data: T;
    json: () => Promise<T>;
}
export type Response<T = unknown> = fp.either.Either<Error, ResponseBody<T>>;
export declare const handleResponse: (response: Response) => Promise<unknown>;
export {};
