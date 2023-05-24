import type { AsyncThunk, PayloadAction, EntityAdapter } from '@reduxjs/toolkit';
import type { StringIndexedObject, NewService } from '../types';
import type { AsyncThunkActionArgs, Payload, Selectors, GeneratedState } from './types';
export declare const handlePayload: <T>(payload: Payload<T>) => Promise<T>;
export type DataWithId = {
    id: string;
};
export declare const formatById: <T>(data: T[]) => StringIndexedObject<T>;
export declare const isArrayOfValue: <Entity>(data: Entity | Entity[]) => data is Entity[];
export declare const createAsyncThunkAction: <Entity extends void | StringIndexedObject<any>, Args extends StringIndexedObject<any> = undefined>(service: NewService<Entity, Args>) => AsyncThunk<Entity, AsyncThunkActionArgs<Args>, {}>;
/**
 * This function is passed to the reducers that are defined for the async thunk actions
 * in the generated slices. It takes an entityAdapter and returns a function that
 * takes the state and action and returns the new state.
 */
export declare const createResponseHandler: <State extends GeneratedState<Entity>, Entity>(entityAdapter: EntityAdapter<Entity>) => (state: State, action: {
    payload: Entity | Entity[];
    type: string;
}) => (State & {
    isLoading: boolean;
    isSubmitting: boolean;
}) | (State & {
    id: string;
    fetchedList: boolean;
    isLoading: boolean;
    isSubmitting: boolean;
});
export declare const generateSelectors: <Entity, State extends StringIndexedObject<GeneratedState<Entity>>>(reducer: keyof State, entityAdapter: EntityAdapter<Entity>) => Selectors<Entity, State>;
