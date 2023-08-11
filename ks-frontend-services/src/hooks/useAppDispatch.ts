import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';

export const createAppDispatchHook = <
  State,
  Dispatch extends ThunkDispatch<State, unknown, any>,
>(): (() => ReturnType<typeof useDispatch<Dispatch>>) => {
  return function useAppDispatch() {
    return useDispatch<Dispatch>();
  };
};
