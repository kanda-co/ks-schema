// Imports
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type Event, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const postEvent = createAsyncThunkAction(services.event.postEvent);

export type EventReturn = AsyncThunkReturnType<typeof postEvent>;
export type EventEntity = EventReturn[0];
export type EventParams = EventReturn[1];
export type EventConfig = EventReturn[2];

export type EventAsyncThunkAction = AsyncThunkAction<
  EventEntity,
  EventParams,
  EventConfig
>;

// Reducer
export type EventState = GeneratedState<Event>;
const initialState: EventState = GENERATED_INITIAL_STATE;

export const handleEventResponse = createResponseHandler<EventState, Event>();

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: {
    [postEvent.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postEvent.fulfilled.type]: handleEventResponse,
    [postEvent.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default eventSlice.reducer;
