import * as fp from 'fp-ts';
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
export declare function handleResponse<T = unknown>(response: Response<T>): Promise<unknown>;
export {};
