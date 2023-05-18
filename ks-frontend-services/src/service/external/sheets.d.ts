import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
export declare const BASE_URL: string;
export interface ReadRequest {
    params?: {
        id: string;
        type?: 'batch' | 'sheet';
        range?: string;
        options?: StringIndexedObject;
    };
}
export interface ReadResponse {
    data: any[][];
    status: number;
    error?: string;
}
declare const _default: {
    read: {
        key: string;
        method: ({ params, }: ReadRequest) => RequestFunction<{
            body: ReadResponse;
        }, ReadResponse>;
    };
};
export default _default;
