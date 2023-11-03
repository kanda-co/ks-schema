import type { FunctionComponent } from 'react';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import type { IO } from 'fp-ts/lib/IO';
import type {
  Args,
  InitialDataAction,
  ValidAction,
  Page,
  PageList,
} from './types';
import { AsyncThunkReturnType } from '../store/types';

export const handleIO = (io: IO<void>): TE.TaskEither<Error, void> =>
  pipe(
    () => io(),
    TE.fromIO,
    TE.mapLeft((error) => new Error(error)),
  );

export const createAction = <T extends ValidAction, Entity>(
  action: T,
  args?: Args<T, Entity>,
  idRequired?: boolean,
  onLoad?: <P extends ValidAction>(
    entity: AsyncThunkReturnType<T>[0],
  ) => InitialDataAction[],
): InitialDataAction<T> => ({ action, args, idRequired, onLoad });

export interface CreatePageArgs<State> {
  path: string;
  PageComponent: FunctionComponent;
  loadingDependencies: (keyof State)[];
  requiredRoles?: string[];
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
