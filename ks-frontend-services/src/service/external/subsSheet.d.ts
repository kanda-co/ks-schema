import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
import { Address, AuthUser, BankAccount, Company } from '../../generated/components/schemas';
export declare const BASE_URL: string;
export interface Guarantor {
    name: string;
    date_of_birth: string;
    address: Address;
    bank_account: BankAccount;
}
export interface UpdateRequest {
    body: {
        cid: string;
    };
}
export interface WriteRequest {
    body: {
        company: Company;
        guarantor: Guarantor;
        user: AuthUser;
    };
}
export interface SubSheetResponse {
    data: any[][];
    status: number;
    error?: string;
}
declare const _default: {
    write: {
        key: string;
        method: ({ body, }: WriteRequest) => RequestFunction<{
            body: SubSheetResponse;
        }, SubSheetResponse>;
    };
    update: {
        key: string;
        method: ({ body, }: UpdateRequest) => RequestFunction<{
            body: SubSheetResponse;
        }, SubSheetResponse>;
    };
};
export default _default;
