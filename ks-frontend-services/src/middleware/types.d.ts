import type { FunctionComponent, ReactNode } from 'react';
import type { StringIndexedObject } from '../types';
import * as actions from '../store/slices/generated/actions';

export type ValidAction = typeof actions[keyof typeof actions];

export type Role = string | undefined;

type Params<T extends ValidAction> = T extends (args: {
  params: infer P;
}) => void
  ? Omit<P, 'id'>
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

export type InitialDataAction<P extends ValidAction> = {
  action: P;
  args?: Args<P>;
  idRequired?: boolean;
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
