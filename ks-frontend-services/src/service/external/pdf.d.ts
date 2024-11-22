import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
import { StringIndexedObject } from '../../types';
import { Introduction, Job, JobCompanyInfo } from '../../generated/components/schemas';
export declare const BASE_URL: string;
export interface CompressRequest {
    body: {
        content: string;
        mimetype: string;
    };
}
export interface CreateRequest {
    body: {
        job: Job;
        company: JobCompanyInfo;
        introduction?: Introduction;
    };
}
export interface SatNoteRequest {
    body: {
        job: StringIndexedObject;
        credit: StringIndexedObject;
        satNote: StringIndexedObject;
        acceptedTerms: StringIndexedObject;
    };
}
export interface FindResponse {
    addresses: Array<string[]>;
}
declare const _default: {
    compress: {
        key: string;
        method: ({ body: { content, mimetype }, }: CompressRequest) => RequestFunction<{
            body: CompressRequest;
        }, StringIndexedObject>;
    };
    create: {
        key: string;
        method: ({ body, }: CreateRequest) => RequestFunction<{
            body: CreateRequest;
        }, StringIndexedObject<any>>;
    };
    satnote: {
        key: string;
        method: ({ body: { job, credit, satNote, acceptedTerms }, }: SatNoteRequest) => RequestFunction<{
            body: SatNoteRequest;
        }, StringIndexedObject>;
    };
};
export default _default;
