// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type InfoCompany, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const infoCompany = createAsyncThunkAction(
  services.infoCompany.infoCompany,
);

export type InfoCompanyReturn = AsyncThunkReturnType<typeof infoCompany>;
export type InfoCompanyEntity = InfoCompanyReturn[0];
export type InfoCompanyParams = InfoCompanyReturn[1];
export type InfoCompanyConfig = InfoCompanyReturn[2];

export type InfoCompanyAsyncThunkAction = AsyncThunkAction<
  InfoCompanyEntity,
  InfoCompanyParams,
  InfoCompanyConfig
>;

// Reducer
export type InfoCompanyState = GeneratedState<InfoCompany>;
const initialState: InfoCompanyState = GENERATED_INITIAL_STATE;

export const handleInfoCompanyResponse = handleResponse<
  InfoCompanyState,
  InfoCompany
>;

export const infoCompanySlice = createSlice({
  name: 'infoCompany',
  initialState,
  reducers: {
    fetched: (
      state: InfoCompanyState,
      action: PayloadAction<InfoCompany[]>,
    ) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: {
    [infoCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [infoCompany.fulfilled.type]: handleInfoCompanyResponse,
    [infoCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default infoCompanySlice.reducer;
