import type { FunctionComponent } from 'react';
import * as TE from 'fp-ts/lib/TaskEither';
import type { IO } from 'fp-ts/lib/IO';
import type { Args, InitialDataAction, ValidAction, Page, PageList } from './types';
import { AsyncThunkReturnType } from '../store/types';
export declare const handleIO: (io: IO<void>) => TE.TaskEither<Error, void>;
export declare const createAction: <T extends unknown, Entity>(action: T, args?: {
    params?: import("./types").Params<T>;
    body?: import("./types").Body<T>;
} & import("../store/types").SharedAsyncThunkActionArgs<Entity>, idRequired?: boolean, onLoad?: <P extends unknown>(entity: AsyncThunkReturnType<T>[0]) => InitialDataAction[]) => InitialDataAction<T, any>;
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
