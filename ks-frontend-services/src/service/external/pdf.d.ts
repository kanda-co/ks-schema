import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
export declare const BASE_URL: string;
export interface CompressRequest {
    body: {
        content: string;
        mimetype: string;
    };
}
export interface CreateRequest {
    body: {
        job: StringIndexedObject;
        company: StringIndexedObject;
    };
}
export interface FindResponse {
    addresses: Array<string[]>;
}
declare const _default: {
    compress: {
        key: string;
        method: ({ body: { content, mimetype }, }: CompressRequest) => RequestFunction<{
            body: FindResponse;
        }, FindResponse>;
    };
    create: {
        key: string;
        method: ({ body: { job, company }, }: CreateRequest) => RequestFunction<{
            body: FindResponse;
        }, FindResponse>;
    };
};
export default _default;
