import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
import { Credit, Job, JobCompanyInfo, SatNote } from '../../generated/components/schemas';
export interface SatNoteFingerprint {
    value: boolean;
    ip: string;
    timestamp: number;
}
export interface SatNoteOpenBankingRequestBodyStruct {
    job: Job;
    companyInfo: JobCompanyInfo;
    satNote: Omit<SatNote, 'certificate' | 'signature'>;
    fingerprint: SatNoteFingerprint;
}
export interface SatNoteCreditRequestBodyStruct extends SatNoteOpenBankingRequestBodyStruct {
    credit: Credit;
}
export interface SatNoteCreditRequestBody {
    body: SatNoteCreditRequestBodyStruct;
}
export interface SatNoteOpenBankingRequestBody {
    body: SatNoteOpenBankingRequestBodyStruct;
}
export interface SatNotePdfResponse {
    base64: string;
}
declare const _default: {
    credit: {
        key: string;
        method: ({ body, }: {
            body: any;
        }) => RequestFunction<SatNoteCreditRequestBody, SatNotePdfResponse>;
    };
    openbanking: {
        key: string;
        method: ({ body, }: {
            body: any;
        }) => RequestFunction<SatNoteOpenBankingRequestBody, SatNotePdfResponse>;
    };
};
export default _default;
