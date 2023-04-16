// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoGhost, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoGhost = createAsyncThunkAction(services.infoGhost.infoGhost);

export type InfoGhostReturn = AsyncThunkReturnType<typeof infoGhost>;
export type InfoGhostEntity = InfoGhostReturn[0];
export type InfoGhostParams = InfoGhostReturn[1];
export type InfoGhostConfig = InfoGhostReturn[2];

export type InfoGhostAsyncThunkAction = AsyncThunkAction<
  InfoGhostEntity,
  InfoGhostParams,
  InfoGhostConfig
>;

// Reducer
export type InfoGhostState = GeneratedState<InfoGhost>;
const initialState: InfoGhostState = GENERATED_INITIAL_STATE;

export const handleInfoGhostResponse = handleResponse<
  InfoGhostState,
  InfoGhost
>;

export const infoGhostSlice = createSlice({
  name: 'infoGhost',
  initialState,
  reducers: {
    fetched: (state: InfoGhostState, action: PayloadAction<InfoGhost[]>) => ({
      ...state,
      ...handleResponse(state, action),
    }),
  },
  extraReducers: {
    [infoGhost.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoGhost.fulfilled.type]: handleInfoGhostResponse,
    [infoGhost.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoGhostSlice.reducer;
