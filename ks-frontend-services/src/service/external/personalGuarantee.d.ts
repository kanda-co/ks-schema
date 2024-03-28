import { RequestFunction } from '@openapi-io-ts/runtime';
import { Company } from '../../generated/components/schemas';
import type { Guarantor } from './subsSheet';
export declare const BASE_URL: string;
export interface Fingerprint {
    value: boolean;
    timestamp?: number;
    ip?: string;
}
export interface PersonalGuaranteeGenerateRequest {
    body: {
        company: Company;
        signee?: string;
        guarantor?: Guarantor;
        fingerprint?: Fingerprint;
    };
}
export interface PersonalGuarantee {
    name: string;
    content: string;
}
export interface PersonalGuaranteeResponse {
    data?: PersonalGuarantee;
    status: number;
    error?: string;
}
declare const _default: {
    generate: {
        key: string;
        method: ({ body, }: PersonalGuaranteeGenerateRequest) => RequestFunction<{
            body: PersonalGuaranteeResponse;
        }, PersonalGuaranteeResponse>;
    };
};
export default _default;
