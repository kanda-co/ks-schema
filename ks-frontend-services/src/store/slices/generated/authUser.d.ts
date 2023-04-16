import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type AuthUser } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const me: import("@reduxjs/toolkit").AsyncThunk<AuthUser, import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postMe: import("@reduxjs/toolkit").AsyncThunk<AuthUser, {
    body: import("../../../").InfoMe;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putMe: import("@reduxjs/toolkit").AsyncThunk<AuthUser, {
    body: import("../../../").InfoMe;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type AuthUserReturn = AsyncThunkReturnType<typeof me | typeof postMe | typeof putMe>;
export type AuthUserEntity = AuthUserReturn[0];
export type AuthUserParams = AuthUserReturn[1];
export type AuthUserConfig = AuthUserReturn[2];
export type AuthUserAsyncThunkAction = AsyncThunkAction<AuthUserEntity, AuthUserParams, AuthUserConfig>;
export type AuthUserState = GeneratedState<AuthUser>;
export declare const handleAuthUserResponse: (state: AuthUserState, action: {
    payload: AuthUser | AuthUser[];
    type: string;
}) => AuthUserState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: AuthUser[];
    allIds: string[];
};
export declare const authUserSlice: import("@reduxjs/toolkit").Slice<AuthUserState, {
    fetched: (state: AuthUserState, action: PayloadAction<AuthUser[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: AuthUser[];
        allIds: string[];
    };
}, "authUser">;
declare const _default: import("redux").Reducer<AuthUserState, import("redux").AnyAction>;
export default _default;
