import type { AsyncThunk, PayloadAction, EntityAdapter } from '@reduxjs/toolkit';
import type { StringIndexedObject, NewService } from '../types';
import type { AsyncThunkActionArgs, Payload, Selectors, GeneratedState } from './types';
export declare const handlePayload: <T>(payload: Payload<T>) => Promise<T>;
export type DataWithId = {
    id: string;
};
export type EntityWithId<Entity> = Entity & DataWithId;
export declare const formatById: <T>(data: T[]) => StringIndexedObject<T>;
export declare const isArrayOfValue: <Entity>(data: Entity | Entity[]) => data is Entity[];
export declare const entityContainsId: <Entity>(data: Entity) => data is EntityWithId<Entity>;
export declare const checkMethodIsGet: (key: string) => boolean;
export declare const createAsyncThunkAction: <Entity extends void | StringIndexedObject<any>, Args extends StringIndexedObject<any> = undefined>(service: NewService<Entity, Args>) => AsyncThunk<Entity, AsyncThunkActionArgs<Args, Entity>, {}>;
/**
 * This function is passed to the reducers that are defined for the async thunk actions
 * in the generated slices. It takes an entityAdapter and returns a function that
 * takes the state and action and returns the new state.
 */
export declare const createResponseHandler: <State extends GeneratedState<Entity>, Entity>(entityAdapter: EntityAdapter<Entity>) => (state: State, action: {
    payload: Entity | Entity[];
    type: string;
}) => (State & {
    error: any;
    hasFetched: boolean;
    isLoading: boolean;
    isSubmitting: boolean;
}) | (State & {
    error: any;
    chainedRequest: boolean;
    hasFetched: boolean;
    fetchedList: boolean;
    isLoading: boolean;
    isSubmitting: boolean;
}) | (State & {
    error: any;
    raw: Entity;
    chainedRequest: boolean;
    hasFetched: boolean;
    fetchedList: boolean;
    isLoading: boolean;
    isSubmitting: boolean;
}) | (State & {
    error: any;
    raw: Entity[];
    chainedRequest: boolean;
    hasFetched: boolean;
    fetchedList: true;
    isLoading: boolean;
    isSubmitting: boolean;
});
/**
 * As above, this function is passed to a reducer, but it handles a void response
 */
export declare const createVoidResponseHandler: <State extends GeneratedState<unknown>>() => (state: State, action: PayloadAction<void>) => State & {
    error: any;
    chainedRequest: boolean;
    fetchedList: boolean;
    hasFetched: boolean;
    isLoading: boolean;
    isSubmitting: boolean;
};
export declare const generateSelectors: <Entity, State extends StringIndexedObject<GeneratedState<Entity>>>(reducer: keyof State, entityAdapter: EntityAdapter<Entity>) => Selectors<Entity, State>;
