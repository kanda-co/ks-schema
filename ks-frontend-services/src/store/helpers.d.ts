import * as toolkit from '@reduxjs/toolkit';
import type { StringIndexedObject, NewService } from '../types';
import type { AsyncThunkActionArgs, GeneratedState, NormalizedEntities, Payload, Selectors } from './types';
export declare const handlePayload: <T>(payload: Payload<T>) => Promise<T>;
export type DataWithId = {
    id: string;
};
export declare const formatById: <T>(data: T[]) => StringIndexedObject<T>;
export declare const normalizeData: <T, S extends NormalizedEntities<T>>(data: T[], state: S) => NormalizedEntities<T>;
export declare const isArrayOfValue: <Entity>(data: Entity | Entity[]) => data is Entity[];
export declare const createAsyncThunkAction: <V extends void | StringIndexedObject<any>, Args extends StringIndexedObject<any> = undefined>(service: NewService<V, Args>) => toolkit.AsyncThunk<V, AsyncThunkActionArgs<Args>, {}>;
export declare const handleResponse: <State extends GeneratedState<Entity>, Entity>(state: State, action: {
    payload: Entity;
    type: string;
}) => State & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: StringIndexedObject<Entity>;
    allIds: string[];
};
export declare const createResponseHandler: <State extends GeneratedState<Entity>, Entity>() => (state: State, action: {
    payload: Entity;
    type: string;
}) => State & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: StringIndexedObject<Entity>;
    allIds: string[];
};
export declare const getCamelCaseEntityName: (entityName: string) => string;
export declare const generateSelectors: <Entity, State extends StringIndexedObject<GeneratedState<Entity>>>(reducer: keyof State) => Selectors<Entity, State>;
