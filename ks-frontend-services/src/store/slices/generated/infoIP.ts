// Imports
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoIP, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoIP = createAsyncThunkAction(services.infoIP.infoIP);

export type InfoIPReturn = AsyncThunkReturnType<typeof infoIP>;
export type InfoIPEntity = InfoIPReturn[0];
export type InfoIPParams = InfoIPReturn[1];
export type InfoIPConfig = InfoIPReturn[2];

export type InfoIPAsyncThunkAction = AsyncThunkAction<
  InfoIPEntity,
  InfoIPParams,
  InfoIPConfig
>;

// Reducer
export type InfoIPState = GeneratedState<InfoIP>;
const initialState: InfoIPState = GENERATED_INITIAL_STATE;

export const handleInfoIPResponse = createResponseHandler<
  InfoIPState,
  InfoIP
>();

export const infoIPSlice = createSlice({
  name: 'infoIP',
  initialState,
  reducers: {},
  extraReducers: {
    [infoIP.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoIP.fulfilled.type]: handleInfoIPResponse,
    [infoIP.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoIPSlice.reducer;
