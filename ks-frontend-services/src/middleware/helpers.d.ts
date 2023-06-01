import type { FunctionComponent } from 'react';
import type { Args, InitialDataAction, ValidAction, Page, PageList } from './types';
import * as TE from 'fp-ts/lib/TaskEither';
import type { IO } from 'fp-ts/lib/IO';
export declare const handleIO: (io: IO<void>) => TE.TaskEither<Error, void>;
export declare const createAction: <T extends unknown>(action: T, args?: {
    params?: import("./types").Params<T>;
    body?: import("./types").Body<T>;
}, idRequired?: boolean) => InitialDataAction<T>;
export interface CreatePageArgs<State> {
    path: string;
    PageComponent: FunctionComponent;
    loadingDependencies: (keyof State)[];
    requiredRoles?: string[];
    idRequired?: boolean;
    initialDataActions: Readonly<InitialDataAction<ValidAction>[]>;
}
export declare const createPage: <State>(args: CreatePageArgs<State>) => Page;
export declare const createPages: <State, Keys extends string | number>(pages: Record<Keys, CreatePageArgs<State>>) => PageList;
