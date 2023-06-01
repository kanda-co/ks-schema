import { createSelector } from '@reduxjs/toolkit';
import type { AuthState } from '../slices/auth';

export interface AuthSelectors<State extends { auth: AuthState }> {
  getAuth: (state: State) => AuthState;
  getUser: (state: State) => AuthState['user'];
  getAuthIsLoading: (state: State) => AuthState['isLoading'];
  getIsUserLoggedIn: (state: State) => boolean;
}

export const getAuthSelectors = <
  State extends { auth: AuthState },
>(): AuthSelectors<State> => {
  const getAuth = (state: State) => state.auth;

  const getUser = createSelector(getAuth, (auth) => auth.user);

  const getAuthIsLoading = createSelector(getAuth, (auth) => auth.isLoading);

  const getIsUserLoggedIn = createSelector(
    getUser,
    getAuthIsLoading,
    (user, isLoading) => !isLoading && user !== null,
  );

  return {
    getAuth,
    getUser,
    getAuthIsLoading,
    getIsUserLoggedIn,
  };
};
