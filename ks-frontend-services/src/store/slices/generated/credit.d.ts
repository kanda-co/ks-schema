import * as toolkit from '@reduxjs/toolkit';
import { type Credit } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoCredit: toolkit.AsyncThunk<Credit, {
    body: Credit;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCredits: toolkit.AsyncThunk<Credit[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postCredit: toolkit.AsyncThunk<Credit, {
    body: Credit;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/getCredit").GetCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/putCredit").PutCreditRequestParameters;
    body: Credit;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/deleteCredit").DeleteCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const quoteCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/quoteCredit").QuoteCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const applyCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/applyCredit").ApplyCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const checkCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/checkCredit").CheckCreditRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const signCredit: toolkit.AsyncThunk<Credit, {
    params: import("../../../generated/operations/signCredit").SignCreditRequestParameters;
    body: import("../../../").SignDocument;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type CreditReturn = AsyncThunkReturnType<typeof infoCredit | typeof getCredits | typeof postCredit | typeof getCredit | typeof putCredit | typeof deleteCredit | typeof quoteCredit | typeof applyCredit | typeof checkCredit | typeof signCredit>;
export type CreditEntity = CreditReturn[0];
export type CreditParams = CreditReturn[1];
export type CreditConfig = CreditReturn[2];
export type CreditAsyncThunkAction = toolkit.AsyncThunkAction<CreditEntity, CreditParams, CreditConfig>;
export type CreditState = GeneratedState<Credit>;
export declare const handleCreditResponse: (state: CreditState, action: {
    payload: Credit;
    type: string;
}) => CreditState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Credit>;
    allIds: string[];
};
export declare const creditSlice: toolkit.Slice<CreditState, {}, "credit">;
declare const _default: toolkit.Reducer<CreditState, toolkit.AnyAction>;
export default _default;
