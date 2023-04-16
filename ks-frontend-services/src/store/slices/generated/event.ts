// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type Event, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
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

export const handleEventResponse = handleResponse<EventState, Event>;

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetched: (state: EventState, action: PayloadAction<Event[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
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
