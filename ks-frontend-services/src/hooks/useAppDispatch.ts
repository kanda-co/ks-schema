import { useDispatch } from 'react-redux';
import type { AnyAction, Dispatch } from '@reduxjs/toolkit';

export type AppDispatchHook<AppDispatch extends Dispatch<AnyAction>> =
  ReturnType<typeof useDispatch<AppDispatch>>;

export default function useAppDispatch<
  AppDispatch extends Dispatch<AnyAction>,
>(): AppDispatchHook<AppDispatch> {
  return useDispatch<AppDispatch>();
}
