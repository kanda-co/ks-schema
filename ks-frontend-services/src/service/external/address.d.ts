import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
export declare const API_KEY: string;
export interface FindRequest {
    params: {
        postCode: string;
    };
}
export interface FindResponse {
    addresses: Array<string[]>;
}
declare const _default: {
    find: {
        key: string;
        method: (request: FindRequest) => RequestFunction<{
            body: FindResponse;
        }, FindResponse>;
    };
};
export default _default;
