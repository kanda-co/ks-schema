import type { AuthState } from '../slices/auth';
export declare const getAuthSelectors: <State extends {
    auth: AuthState;
}>() => {
    getAuth: (state: State) => AuthState;
    getUser: ((state: State) => import("../..").AuthUser) & import("reselect").OutputSelectorFields<(args_0: AuthState) => import("../..").AuthUser & {
        clearCache: () => void;
    }> & {
        clearCache: () => void;
    };
    getAuthIsLoading: ((state: State) => boolean) & import("reselect").OutputSelectorFields<(args_0: AuthState) => boolean & {
        clearCache: () => void;
    }> & {
        clearCache: () => void;
    };
    getIsUserLoggedIn: ((state: State) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../..").AuthUser, args_1: boolean) => boolean & {
        clearCache: () => void;
    }> & {
        clearCache: () => void;
    };
};
