import { Either } from 'fp-ts/Either';
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
export declare const handleResponse: (response: Response) => Promise<unknown>;
export {};
