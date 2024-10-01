import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
import { Job } from '../../generated/components/schemas';
export declare const BASE_URL: string;
export interface FormattedPayoutCompanyData {
    company_id: string;
    tp_name: string;
    tp_email: string;
    bank_account_name: string;
    bank_account_number: string;
    bank_account_sortcode: string;
    skip_deposit: string;
}
export interface PayoutCreditFees {
    loan: number;
    selected_deposit: number;
    tp_own_deposit: boolean;
    total_to_subsidise: number;
    kanda_fee: number;
    kanda_charge: number;
    kanda_min_charge: number;
    base_subsidy: number;
    total_subsidy: number;
    amount_to_pay: number;
    legacy: boolean;
    check_status: string;
}
export interface FormattedPayoutCreditData extends PayoutCreditFees {
    credit_id: string;
    loan_payment_id: string;
    deposit_payment_id: string;
    credit_created_at: Date;
    credit_updated_at: Date;
    customer_name: string;
    customer_email: string;
    product_name: string;
    rate: number;
    term: number;
}
export interface FormattedPayoutJobData {
    job_id: string;
    job_title: string;
    status: string;
    job_created_at: Date;
    job_updated_at: Date;
    price: number;
    requested_deposit: number;
    deposit_type: Job['deposit_type'];
}
export interface PayoutData extends FormattedPayoutCompanyData, FormattedPayoutCreditData, FormattedPayoutJobData {
}
export type PayoutsResponse = PayoutData[];
declare const _default: {
    payouts: {
        key: string;
        method: () => RequestFunction<{
            body: PayoutsResponse;
        }, PayoutsResponse>;
    };
};
export default _default;
