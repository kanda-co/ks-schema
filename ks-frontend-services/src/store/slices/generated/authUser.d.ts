import * as toolkit from '@reduxjs/toolkit';
import { type AuthUser } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const me: toolkit.AsyncThunk<AuthUser, import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postMe: toolkit.AsyncThunk<AuthUser, {
    body: import("../../../").InfoMe;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putMe: toolkit.AsyncThunk<AuthUser, {
    body: import("../../../").InfoMe;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type AuthUserReturn = AsyncThunkReturnType<typeof me | typeof postMe | typeof putMe>;
export type AuthUserEntity = AuthUserReturn[0];
export type AuthUserParams = AuthUserReturn[1];
export type AuthUserConfig = AuthUserReturn[2];
export type AuthUserAsyncThunkAction = toolkit.AsyncThunkAction<AuthUserEntity, AuthUserParams, AuthUserConfig>;
export type AuthUserState = GeneratedState<AuthUser>;
export declare const handleAuthUserResponse: (state: AuthUserState, action: {
    payload: AuthUser;
    type: string;
}) => AuthUserState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<AuthUser>;
    allIds: string[];
};
export declare const authUserSlice: toolkit.Slice<AuthUserState, {}, "authUser">;
declare const _default: toolkit.Reducer<AuthUserState, toolkit.AnyAction>;
export default _default;
