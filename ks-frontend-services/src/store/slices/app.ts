import type { StringIndexedObject } from '../../types';
import * as toolkit from '@reduxjs/toolkit';
import { PathKey } from '../types';

export type StringIndexedObjectOrUndefined =
  | StringIndexedObject
  | undefined
  | void;

export interface AppState<T> {
  pathKey: PathKey<T>;
  isLoading: boolean;
  requiredNonBlockingActions: string[];
  finishedNonBlockingActions: string[];
  id?: string;
}

export const createAppSlice = <T>() => {
  const initialState: AppState<T> = {
    pathKey: {
      page: 'login' as T,
      id: undefined,
      path: '/login',
    },
    isLoading: false,
    requiredNonBlockingActions: [],
    finishedNonBlockingActions: [],
    id: undefined,
  };

  const appSlice = toolkit.createSlice({
    name: 'app',
    initialState,
    reducers: {
      runNonBlockingAction: (state, action: toolkit.PayloadAction<string>) => {
        return {
          ...state,
          requiredNonBlockingActions: state.requiredNonBlockingActions.filter(
            (a) => a !== action.payload,
          ),
          pendingNonBlockingAction: action.payload,
        };
      },
      queueNonBlockingActions: (
        state,
        action: toolkit.PayloadAction<string[]>,
      ) => {
        return {
          ...state,
          requiredNonBlockingActions: action.payload,
        };
      },
      routeChange: (state, action: toolkit.PayloadAction<PathKey<T>>) => {
        return {
          ...state,
          pathKey: action.payload,
        };
      },
    },
  });

  return appSlice;
};
