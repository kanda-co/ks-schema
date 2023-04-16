import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Payment } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getPayments: import("@reduxjs/toolkit").AsyncThunk<Payment[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postPayment: import("@reduxjs/toolkit").AsyncThunk<Payment, {
    body: Payment;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getPayment: import("@reduxjs/toolkit").AsyncThunk<Payment, {
    params: import("../../../generated/operations/getPayment").GetPaymentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putPayment: import("@reduxjs/toolkit").AsyncThunk<Payment, {
    params: import("../../../generated/operations/putPayment").PutPaymentRequestParameters;
    body: Payment;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deletePayment: import("@reduxjs/toolkit").AsyncThunk<Payment, {
    params: import("../../../generated/operations/deletePayment").DeletePaymentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const markPayment: import("@reduxjs/toolkit").AsyncThunk<Payment, {
    params: import("../../../generated/operations/markPayment").MarkPaymentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type PaymentReturn = AsyncThunkReturnType<typeof getPayments | typeof postPayment | typeof getPayment | typeof putPayment | typeof deletePayment | typeof markPayment>;
export type PaymentEntity = PaymentReturn[0];
export type PaymentParams = PaymentReturn[1];
export type PaymentConfig = PaymentReturn[2];
export type PaymentAsyncThunkAction = AsyncThunkAction<PaymentEntity, PaymentParams, PaymentConfig>;
export type PaymentState = GeneratedState<Payment>;
export declare const handlePaymentResponse: (state: PaymentState, action: {
    payload: Payment | Payment[];
    type: string;
}) => PaymentState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Payment[];
    allIds: string[];
};
export declare const paymentSlice: import("@reduxjs/toolkit").Slice<PaymentState, {
    fetched: (state: PaymentState, action: PayloadAction<Payment[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Payment[];
        allIds: string[];
    };
}, "payment">;
declare const _default: import("redux").Reducer<PaymentState, import("redux").AnyAction>;
export default _default;
