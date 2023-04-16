import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type InfoAuth } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoAuth: import("@reduxjs/toolkit").AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoVerify: import("@reduxjs/toolkit").AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoPassword: import("@reduxjs/toolkit").AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoSession: import("@reduxjs/toolkit").AsyncThunk<import("../../../").InfoSession, {
    body: import("../../../").InfoSession;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoClaimAccount: import("@reduxjs/toolkit").AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoAuthReturn = AsyncThunkReturnType<typeof infoAuth | typeof infoVerify | typeof infoPassword | typeof infoSession | typeof infoClaimAccount>;
export type InfoAuthEntity = InfoAuthReturn[0];
export type InfoAuthParams = InfoAuthReturn[1];
export type InfoAuthConfig = InfoAuthReturn[2];
export type InfoAuthAsyncThunkAction = AsyncThunkAction<InfoAuthEntity, InfoAuthParams, InfoAuthConfig>;
export type InfoAuthState = GeneratedState<InfoAuth>;
export declare const handleInfoAuthResponse: (state: InfoAuthState, action: {
    payload: InfoAuth | InfoAuth[];
    type: string;
}) => InfoAuthState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: InfoAuth[];
    allIds: string[];
};
export declare const infoAuthSlice: import("@reduxjs/toolkit").Slice<InfoAuthState, {
    fetched: (state: InfoAuthState, action: PayloadAction<InfoAuth[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: InfoAuth[];
        allIds: string[];
    };
}, "infoAuth">;
declare const _default: import("redux").Reducer<InfoAuthState, import("redux").AnyAction>;
export default _default;
