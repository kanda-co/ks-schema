import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Credit } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    body: Credit;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCredits: import("@reduxjs/toolkit").AsyncThunk<Credit[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    body: Credit;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/getCredit").GetCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/putCredit").PutCreditRequestParameters;
    body: Credit;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/deleteCredit").DeleteCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const quoteCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/quoteCredit").QuoteCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const applyCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/applyCredit").ApplyCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const checkCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/checkCredit").CheckCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const signCredit: import("@reduxjs/toolkit").AsyncThunk<Credit, {
    params: import("../../../generated/operations/signCredit").SignCreditRequestParameters;
    body: import("../../../").SignDocument;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type CreditReturn = AsyncThunkReturnType<typeof infoCredit | typeof getCredits | typeof postCredit | typeof getCredit | typeof putCredit | typeof deleteCredit | typeof quoteCredit | typeof applyCredit | typeof checkCredit | typeof signCredit>;
export type CreditEntity = CreditReturn[0];
export type CreditParams = CreditReturn[1];
export type CreditConfig = CreditReturn[2];
export type CreditAsyncThunkAction = AsyncThunkAction<CreditEntity, CreditParams, CreditConfig>;
export type CreditState = GeneratedState<Credit>;
export declare const handleCreditResponse: (state: CreditState, action: {
    payload: Credit | Credit[];
    type: string;
}) => CreditState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Credit[];
    allIds: string[];
};
export declare const creditSlice: import("@reduxjs/toolkit").Slice<CreditState, {
    fetched: (state: CreditState, action: PayloadAction<Credit[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Credit[];
        allIds: string[];
    };
}, "credit">;
declare const _default: import("redux").Reducer<CreditState, import("redux").AnyAction>;
export default _default;
