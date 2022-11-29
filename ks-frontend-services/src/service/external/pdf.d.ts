import { RequestFunction } from '@openapi-io-ts/runtime';
export declare const BASE_URL: string;
export interface CompressRequest {
    body: {
        content: string;
        mimetype: string;
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
};
export default _default;
