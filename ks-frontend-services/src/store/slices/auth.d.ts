import type { AuthUser } from '../../generated/components/schemas';
export interface AuthState {
  isLoading: boolean;
  user: AuthUser | null;
}
export declare const userLoggedIn: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<
  AuthUser,
  'auth/userLoggedIn'
>;
declare const _default: import('redux').Reducer<
  AuthState,
  import('redux').AnyAction
>;
export default _default;
