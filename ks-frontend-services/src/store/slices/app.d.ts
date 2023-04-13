import type { StringIndexedObject } from '../../types';
import * as toolkit from '@reduxjs/toolkit';
import { PathKey } from '../types';
export type StringIndexedObjectOrUndefined = StringIndexedObject | undefined | void;
export interface AppState<T> {
    pathKey: PathKey<T>;
    isLoading: boolean;
    requiredNonBlockingActions: string[];
    finishedNonBlockingActions: string[];
    id?: string;
}
export declare const createAppSlice: <T>() => toolkit.Slice<AppState<T>, {
    runNonBlockingAction: (state: import("immer/dist/internal").WritableDraft<AppState<T>>, action: toolkit.PayloadAction<string>) => {
        requiredNonBlockingActions: string[];
        pendingNonBlockingAction: string;
        pathKey: import("immer/dist/internal").WritableDraft<PathKey<T>>;
        isLoading: boolean;
        finishedNonBlockingActions: string[];
        id?: string;
    };
    queueNonBlockingActions: (state: import("immer/dist/internal").WritableDraft<AppState<T>>, action: toolkit.PayloadAction<string[]>) => {
        requiredNonBlockingActions: string[];
        pathKey: import("immer/dist/internal").WritableDraft<PathKey<T>>;
        isLoading: boolean;
        finishedNonBlockingActions: string[];
        id?: string;
    };
    routeChange: (state: import("immer/dist/internal").WritableDraft<AppState<T>>, action: {
        payload: PathKey<T>;
        type: string;
    }) => {
        pathKey: PathKey<T>;
        isLoading: boolean;
        requiredNonBlockingActions: string[];
        finishedNonBlockingActions: string[];
        id?: string;
    };
}, "app">;
