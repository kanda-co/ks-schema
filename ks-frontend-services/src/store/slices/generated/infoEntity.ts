// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoEntity, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getInfoEntity = createAsyncThunkAction(
  services.infoEntity.getInfoEntity,
);

export type InfoEntityReturn = AsyncThunkReturnType<typeof getInfoEntity>;
export type InfoEntityEntity = InfoEntityReturn[0];
export type InfoEntityParams = InfoEntityReturn[1];
export type InfoEntityConfig = InfoEntityReturn[2];

export type InfoEntityAsyncThunkAction = AsyncThunkAction<
  InfoEntityEntity,
  InfoEntityParams,
  InfoEntityConfig
>;

// Reducer
export type InfoEntityState = GeneratedState<InfoEntity>;
const initialState: InfoEntityState = GENERATED_INITIAL_STATE;

export const handleInfoEntityResponse = handleResponse<
  InfoEntityState,
  InfoEntity
>;

export const infoEntitySlice = createSlice({
  name: 'infoEntity',
  initialState,
  reducers: {
    fetched: (state: InfoEntityState, action: PayloadAction<InfoEntity[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: {
    [getInfoEntity.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getInfoEntity.fulfilled.type]: handleInfoEntityResponse,
    [getInfoEntity.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoEntitySlice.reducer;
