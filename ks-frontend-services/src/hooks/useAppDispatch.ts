import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';
import { AuthState } from '../store/slices/auth';

export const createAppDispatchHook = <
  State extends { auth: AuthState },
  Dispatch extends ThunkDispatch<State, unknown, any>,
>(): (() => ReturnType<typeof useDispatch<Dispatch>>) => {
  return function useAppDispatch() {
    return useDispatch<Dispatch>();
  };
};
