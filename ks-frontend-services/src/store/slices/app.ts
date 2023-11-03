import type { StringIndexedObject } from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PathKey } from '../types';
import type { PageList } from '../../middleware/types';
import { createSlice } from '../toolkit';

export type StringIndexedObjectOrUndefined =
  | StringIndexedObject
  | undefined
  | void;

export interface AppState<T> {
  pathKey: PathKey<T>;
  visitedPathKeys: PathKey<T>[];
  isLoading: boolean;
  requiredNonBlockingActions: string[];
  finishedNonBlockingActions: string[];
  id?: string;
}

export const createAppSlice = <T>() => {
  const initialPathKey: PathKey<T> = {
    page: 'login' as keyof T,
    id: undefined,
    path: '/login',
    isGhosted: false,
    pages: {
      login: {
        path: '/login',
        PageComponent: null,
        loadingDependencies: [],
        initialDataActions: [],
      },
    } as PageList<T>,
  };

  const initialState: AppState<T> = {
    pathKey: initialPathKey,
    visitedPathKeys: [initialPathKey],
    isLoading: false,
    requiredNonBlockingActions: [],
    finishedNonBlockingActions: [],
    id: undefined,
  };

  const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      runNonBlockingAction: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          requiredNonBlockingActions: state.requiredNonBlockingActions.filter(
            (a) => a !== action.payload,
          ),
          pendingNonBlockingAction: action.payload,
        };
      },
      queueNonBlockingActions: (state, action: PayloadAction<string[]>) => {
        return {
          ...state,
          requiredNonBlockingActions: action.payload,
        };
      },
      routeChange: (state, action: PayloadAction<PathKey<T>>) => {
        return {
          ...state,
          requiredNonBlockingActions: [],
          finishedNonBlockingActions: [],
          visitedPathKeys: [
            ...state.visitedPathKeys,
            state.pathKey,
          ] as PathKey<T>[],
          pathKey: action.payload,
        };
      },
    },
  });

  return appSlice;
};
