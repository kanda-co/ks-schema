import type { FunctionComponent, ReactNode } from 'react';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { StringIndexedObject } from '../types';
import * as actions from '../store/slices/generated/actions';
import type { AsyncThunkReturnType } from '../store/types';
import { createAppDispatchHook } from '../hooks/useAppDispatch';

export type ValidAction = typeof actions[keyof typeof actions];

export type Role = string | undefined;

export type WithOptionalId<T> = Omit<T, 'id'> & {
  id?: string;
};

type Params<T extends ValidAction> = T extends (args: {
  params: infer P;
}) => void
  ? WithOptionalId<P>
  : never;

type Body<T extends ValidAction> = T extends (args: { body: infer B }) => void
  ? B
  : never;

type Args<T extends ValidAction> =
  | {
      params?: Params<T>;
      body?: Body<T>;
    }
  | undefined;

export type InitialDataAction<T extends ValidAction = any> = {
  action: T;
  args?: Args<T>;
  idRequired?: boolean;
  onLoad?: (entity: AsyncThunkReturnType<T>[0]) => InitialDataAction[];
};

export interface Page {
  path: string;
  requiredRoles?: string[];
  idRequired?: boolean;
  loadingDependencies: Readonly<string[]>;
  PageComponent: FunctionComponent;
  initialDataActions: Readonly<InitialDataAction<ValidAction>[]>;
}

export interface RouterChildren {
  children?: ReactNode;
}

export interface Router<Keys extends string | number> {
  Router: FunctionComponent<RouterChildren>;
  URLS: {
    [key in Keys]: string;
  };
}

export interface RoutedApp<Keys extends string | number> {
  router: Router<Keys>;
  pages: PageList;
}

export type PageList<T = StringIndexedObject> = {
  [key in keyof T]: Page;
};
