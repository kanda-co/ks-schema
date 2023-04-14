// Imports
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoEntity, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
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

export const handleInfoEntityResponse = createResponseHandler<
  InfoEntityState,
  InfoEntity
>();

export const infoEntitySlice = createSlice({
  name: 'infoEntity',
  initialState,
  reducers: {},
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
