import { Either } from 'fp-ts/Either';
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
export declare const handleResponse: (response: Response) => Promise<unknown>;
export {};
