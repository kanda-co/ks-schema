import type { AuthState } from '../slices/auth';
export interface AuthSelectors<
  State extends {
    auth: AuthState;
  },
> {
  getAuth: (state: State) => AuthState;
  getUser: (state: State) => AuthState['user'];
  getAuthIsLoading: (state: State) => AuthState['isLoading'];
  getIsUserLoggedIn: (state: State) => boolean;
}
export declare const getAuthSelectors: <
  State extends {
    auth: AuthState;
  },
>() => AuthSelectors<State>;
