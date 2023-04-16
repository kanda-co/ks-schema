// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoQuery, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoQuery = createAsyncThunkAction(services.infoQuery.infoQuery);

export type InfoQueryReturn = AsyncThunkReturnType<typeof infoQuery>;
export type InfoQueryEntity = InfoQueryReturn[0];
export type InfoQueryParams = InfoQueryReturn[1];
export type InfoQueryConfig = InfoQueryReturn[2];

export type InfoQueryAsyncThunkAction = AsyncThunkAction<
  InfoQueryEntity,
  InfoQueryParams,
  InfoQueryConfig
>;

// Reducer
export type InfoQueryState = GeneratedState<InfoQuery>;
const initialState: InfoQueryState = GENERATED_INITIAL_STATE;

export const handleInfoQueryResponse = handleResponse<
  InfoQueryState,
  InfoQuery
>;

export const infoQuerySlice = createSlice({
  name: 'infoQuery',
  initialState,
  reducers: {
    fetched: (state: InfoQueryState, action: PayloadAction<InfoQuery[]>) => ({
      ...state,
      ...handleResponse(state, action),
    }),
  },
  extraReducers: {
    [infoQuery.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoQuery.fulfilled.type]: handleInfoQueryResponse,
    [infoQuery.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoQuerySlice.reducer;
