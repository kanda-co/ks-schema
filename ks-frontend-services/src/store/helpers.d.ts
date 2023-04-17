import type { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { StringIndexedObject, NewService } from '../types';
import type { AsyncThunkActionArgs, GeneratedState, Payload, Selectors } from './types';
export declare const handlePayload: <T>(payload: Payload<T>) => Promise<T>;
export type DataWithId = {
    id: string;
};
export declare const formatById: <T>(data: T[]) => StringIndexedObject<T>;
export declare const isArrayOfValue: <Entity>(data: Entity | Entity[]) => data is Entity[];
export declare const createAsyncThunkAction: <V extends void | StringIndexedObject<any>, Args extends StringIndexedObject<any> = undefined>(service: NewService<V, Args>) => AsyncThunk<V, AsyncThunkActionArgs<Args>, {}>;
export declare const handleResponse: <State extends GeneratedState<Entity>, Entity>(state: State, action: {
    payload: Entity | Entity[];
    type: string;
}) => (State & {
    isLoading: boolean;
    isSubmitting: boolean;
}) | {
    id: string;
    fetchedList: boolean;
    byId: {
        [x: string]: Entity;
    };
    isLoading: boolean;
    isSubmitting: boolean;
};
export declare const generateSelectors: <Entity, State extends StringIndexedObject<GeneratedState<Entity>>>(reducer: keyof State) => Selectors<Entity, State>;
