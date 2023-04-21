import { RequestFunction } from '@openapi-io-ts/runtime';
export declare const BASE_URL: string;
export interface ReadRequest {
    body: {
        spreadsheet_id?: string;
        range?: string;
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
        method: ({ body: { spreadsheet_id, range }, }: ReadRequest) => RequestFunction<{
            body: ReadResponse;
        }, ReadResponse>;
    };
};
export default _default;
