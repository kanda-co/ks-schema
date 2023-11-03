import type { AuthUser } from '../../generated/components/schemas';
import { User } from 'firebase/auth';
export interface AuthState {
    isLoading: boolean;
    user: AuthUser | null;
    firebaseUser: User | null;
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
export declare const ghostUser: import("@reduxjs/toolkit").AsyncThunk<void, string, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const userLoggedIn: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<{
    user: AuthUser;
    firebaseUser: User;
}, "auth/userLoggedIn">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">;
declare const _default: import("redux").Reducer<AuthState, import("redux").AnyAction>;
export default _default;
