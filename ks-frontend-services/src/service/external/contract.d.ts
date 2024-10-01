import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
import { Company } from '../../generated/components/schemas';
import type { Guarantor } from './subsSheet';
export declare const BASE_URL: string;
export interface Fingerprint {
    value: boolean;
    timestamp?: number;
    ip?: string;
}
export interface ContractGenerateRequest {
    body: {
        company: Company;
        signee?: string;
        guarantor?: Guarantor;
        fingerprint?: Fingerprint;
    };
}
export interface Contract {
    name: string;
    content: string;
}
export interface ContractResponse {
    data?: Contract;
    status: number;
    error?: string;
}
declare const _default: {
    generate: {
        key: string;
        method: ({ body, }: ContractGenerateRequest) => RequestFunction<{
            body: ContractResponse;
        }, ContractResponse>;
    };
};
export default _default;
