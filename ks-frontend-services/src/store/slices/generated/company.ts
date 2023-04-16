// Imports
import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { createSlice } from '../../toolkit';
import { type Company, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, handleResponse } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getCompanies = createAsyncThunkAction(
  services.company.getCompanies,
);
export const postCompany = createAsyncThunkAction(services.company.postCompany);
export const getCompany = createAsyncThunkAction(services.company.getCompany);
export const putCompany = createAsyncThunkAction(services.company.putCompany);
export const deleteCompany = createAsyncThunkAction(
  services.company.deleteCompany,
);
export const getCompanyDirectorVerification = createAsyncThunkAction(
  services.company.getCompanyDirectorVerification,
);
export const postCompanyDirectorVerification = createAsyncThunkAction(
  services.company.postCompanyDirectorVerification,
);
export const directorCompany = createAsyncThunkAction(
  services.company.directorCompany,
);
export const approveCompany = createAsyncThunkAction(
  services.company.approveCompany,
);
export const declineCompany = createAsyncThunkAction(
  services.company.declineCompany,
);

export type CompanyReturn = AsyncThunkReturnType<
  | typeof getCompanies
  | typeof postCompany
  | typeof getCompany
  | typeof putCompany
  | typeof deleteCompany
  | typeof getCompanyDirectorVerification
  | typeof postCompanyDirectorVerification
  | typeof directorCompany
  | typeof approveCompany
  | typeof declineCompany
>;
export type CompanyEntity = CompanyReturn[0];
export type CompanyParams = CompanyReturn[1];
export type CompanyConfig = CompanyReturn[2];

export type CompanyAsyncThunkAction = AsyncThunkAction<
  CompanyEntity,
  CompanyParams,
  CompanyConfig
>;

// Reducer
export type CompanyState = GeneratedState<Company>;
const initialState: CompanyState = GENERATED_INITIAL_STATE;

export const handleCompanyResponse = handleResponse<CompanyState, Company>;

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    fetched: (state: CompanyState, action: PayloadAction<Company[]>) => ({
      ...state,
      ...handleResponse(state, action),
    }),
  },
  extraReducers: {
    [getCompanies.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getCompanies.fulfilled.type]: handleCompanyResponse,
    [getCompanies.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postCompany.fulfilled.type]: handleCompanyResponse,
    [postCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getCompany.fulfilled.type]: handleCompanyResponse,
    [getCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putCompany.fulfilled.type]: handleCompanyResponse,
    [putCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteCompany.fulfilled.type]: handleCompanyResponse,
    [deleteCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getCompanyDirectorVerification.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getCompanyDirectorVerification.fulfilled.type]: handleCompanyResponse,
    [getCompanyDirectorVerification.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postCompanyDirectorVerification.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postCompanyDirectorVerification.fulfilled.type]: handleCompanyResponse,
    [postCompanyDirectorVerification.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [directorCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [directorCompany.fulfilled.type]: handleCompanyResponse,
    [directorCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [approveCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [approveCompany.fulfilled.type]: handleCompanyResponse,
    [approveCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [declineCompany.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [declineCompany.fulfilled.type]: handleCompanyResponse,
    [declineCompany.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default companySlice.reducer;
