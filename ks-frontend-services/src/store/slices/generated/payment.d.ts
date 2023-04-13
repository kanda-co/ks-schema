import * as toolkit from '@reduxjs/toolkit';
import { type Payment } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getPayments: toolkit.AsyncThunk<Payment[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postPayment: toolkit.AsyncThunk<Payment, {
    body: Payment;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getPayment: toolkit.AsyncThunk<Payment, {
    params: import("../../../generated/operations/getPayment").GetPaymentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putPayment: toolkit.AsyncThunk<Payment, {
    params: import("../../../generated/operations/putPayment").PutPaymentRequestParameters;
    body: Payment;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deletePayment: toolkit.AsyncThunk<Payment, {
    params: import("../../../generated/operations/deletePayment").DeletePaymentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const markPayment: toolkit.AsyncThunk<Payment, {
    params: import("../../../generated/operations/markPayment").MarkPaymentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type PaymentReturn = AsyncThunkReturnType<typeof getPayments | typeof postPayment | typeof getPayment | typeof putPayment | typeof deletePayment | typeof markPayment>;
export type PaymentEntity = PaymentReturn[0];
export type PaymentParams = PaymentReturn[1];
export type PaymentConfig = PaymentReturn[2];
export type PaymentAsyncThunkAction = toolkit.AsyncThunkAction<PaymentEntity, PaymentParams, PaymentConfig>;
export type PaymentState = GeneratedState<Payment>;
export declare const handlePaymentResponse: (state: PaymentState, action: {
    payload: Payment;
    type: string;
}) => PaymentState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Payment>;
    allIds: string[];
};
export declare const paymentSlice: toolkit.Slice<PaymentState, {}, "payment">;
declare const _default: toolkit.Reducer<PaymentState, toolkit.AnyAction>;
export default _default;
