import { useDispatch, useSelector } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { AuthSlice, createSelectors } from '../store';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import {
  revalidateUser,
  logout as logoutAction,
  AuthState,
} from '../store/slices/auth';

export interface CurrentUserHook {
  user?: AuthState['user'];
  firebaseUser?: AuthState['firebaseUser'];
  isUserLoggedIn: boolean;
  revalidate: () => Promise<unknown>;
  logout: () => void;
}

export const createCurrentUserHook = <
  State extends AuthSlice,
  Dispatch extends ThunkDispatch<State, unknown, any>,
  Pages,
>(
  useAppDispatch: typeof useDispatch<Dispatch>,
  selectors: ReturnType<typeof createSelectors<State, Pages>>,
): (() => CurrentUserHook) => {
  return function useCurrentUser(): CurrentUserHook {
    const dispatch = useAppDispatch();
    const { push } = useHistory();

    const user = useSelector(selectors.getUser);
    const firebaseUser = useSelector(selectors.getFirebaseUser);

    const revalidate = useCallback(
      () => dispatch(revalidateUser()),
      [dispatch],
    );

    const logout = useCallback(() => {
      dispatch(logoutAction());
      // TODO: Use URLS constant
      push('/login');
    }, [dispatch, push]);

    return {
      user,
      firebaseUser,
      isUserLoggedIn: !!user,
      revalidate,
      logout,
    };
  };
};
