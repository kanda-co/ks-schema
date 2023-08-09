import type { AuthUser } from '../../generated/components/schemas';
export interface AuthState {
    isLoading: boolean;
    user: AuthUser | null;
}
export declare const revalidateUser: import("@reduxjs/toolkit").AsyncThunk<void, void, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const userLoggedIn: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<AuthUser, "auth/userLoggedIn">;
declare const _default: import("redux").Reducer<AuthState, import("redux").AnyAction>;
export default _default;
