import type { AsyncThunk, PayloadAction, EntityAdapter, EntityState } from '@reduxjs/toolkit';
import type { StringIndexedObject, NewService } from '../types';
import type { AsyncThunkActionArgs, Payload, Selectors } from './types';
export declare const handlePayload: <T>(payload: Payload<T>) => Promise<T>;
export type DataWithId = {
    id: string;
};
export declare const formatById: <T>(data: T[]) => StringIndexedObject<T>;
export declare const isArrayOfValue: <Entity>(data: Entity | Entity[]) => data is Entity[];
export declare const createAsyncThunkAction: <Entity extends void | StringIndexedObject<any>, Args extends StringIndexedObject<any> = undefined>(service: NewService<Entity, Args>) => AsyncThunk<Entity, AsyncThunkActionArgs<Args>, {}>;
export declare const createResponseHandler: <State extends EntityState<Entity>, Entity>(entityAdapter: EntityAdapter<Entity>) => (state: State, action: {
    payload: Entity | Entity[];
    type: string;
}) => State;
export declare const generateSelectors: <Entity, State extends EntityState<Entity>>(reducer: keyof State) => Selectors<Entity, State>;
