import * as toolkit from '@reduxjs/toolkit';
import { type Event } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const postEvent: toolkit.AsyncThunk<Event, {
    body: Event;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type EventReturn = AsyncThunkReturnType<typeof postEvent>;
export type EventEntity = EventReturn[0];
export type EventParams = EventReturn[1];
export type EventConfig = EventReturn[2];
export type EventAsyncThunkAction = toolkit.AsyncThunkAction<EventEntity, EventParams, EventConfig>;
export type EventState = GeneratedState<Event>;
export declare const handleEventResponse: (state: EventState, action: {
    payload: Event;
    type: string;
}) => EventState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Event>;
    allIds: string[];
};
export declare const eventSlice: toolkit.Slice<EventState, {}, "event">;
declare const _default: toolkit.Reducer<EventState, toolkit.AnyAction>;
export default _default;
