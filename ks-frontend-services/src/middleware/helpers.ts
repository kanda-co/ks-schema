import type { FunctionComponent } from 'react';
import type {
  Args,
  InitialDataAction,
  ValidAction,
  Page,
  PageList,
  RoutedApp,
} from './types';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import type { IO } from 'fp-ts/lib/IO';

export const handleIO = (io: IO<void>): TE.TaskEither<Error, void> =>
  pipe(
    () => io(),
    TE.fromIO,
    TE.mapLeft((error) => new Error(error)),
  );

export const createAction = <T extends ValidAction>(
  action: T,
  args?: Args<T>,
  idRequired?: boolean,
): InitialDataAction<T> => ({ action, args, idRequired });

export interface CreatePageArgs<State> {
  path: string;
  PageComponent: FunctionComponent;
  loadingDependencies: (keyof State)[];
  requiredRole?: string;
  idRequired?: boolean;
  initialDataActions: Readonly<InitialDataAction<ValidAction>[]>;
}

export const createPage = <State>(args: CreatePageArgs<State>): Page =>
  args as Page;

export const createPages = <State, Keys extends string | number>(
  pages: Record<Keys, CreatePageArgs<State>>,
): PageList => {
  return Object.entries(pages).reduce((acc, [key, value]) => {
    acc[key] = createPage(value as CreatePageArgs<State>);
    return acc;
  }, {} as PageList);
};
