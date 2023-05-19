import { User } from 'firebase/auth';
export interface AuthState {
  isLoading: boolean;
  user: User | null;
  role: string;
}
export interface UserLoggedInPayload {
  user: User;
  role: string;
}
export declare const userLoggedIn: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<
  UserLoggedInPayload,
  'auth/userLoggedIn'
>;
declare const _default: import('redux').Reducer<
  AuthState,
  import('redux').AnyAction
>;
export default _default;
