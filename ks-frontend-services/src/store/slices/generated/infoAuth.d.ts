import * as toolkit from '@reduxjs/toolkit';
import { type InfoAuth } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoAuth: toolkit.AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoVerify: toolkit.AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoPassword: toolkit.AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoSession: toolkit.AsyncThunk<import("../../../").InfoSession, {
    body: import("../../../").InfoSession;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const infoClaimAccount: toolkit.AsyncThunk<InfoAuth, {
    body: InfoAuth;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoAuthReturn = AsyncThunkReturnType<typeof infoAuth | typeof infoVerify | typeof infoPassword | typeof infoSession | typeof infoClaimAccount>;
export type InfoAuthEntity = InfoAuthReturn[0];
export type InfoAuthParams = InfoAuthReturn[1];
export type InfoAuthConfig = InfoAuthReturn[2];
export type InfoAuthAsyncThunkAction = toolkit.AsyncThunkAction<InfoAuthEntity, InfoAuthParams, InfoAuthConfig>;
export type InfoAuthState = GeneratedState<InfoAuth>;
export declare const handleInfoAuthResponse: (state: InfoAuthState, action: {
    payload: InfoAuth;
    type: string;
}) => InfoAuthState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<InfoAuth>;
    allIds: string[];
};
export declare const infoAuthSlice: toolkit.Slice<InfoAuthState, {}, "infoAuth">;
declare const _default: toolkit.Reducer<InfoAuthState, toolkit.AnyAction>;
export default _default;
