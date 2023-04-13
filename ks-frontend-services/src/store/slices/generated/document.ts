// Imports
import * as toolkit from '@reduxjs/toolkit';
import { type Document, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getDocuments = createAsyncThunkAction(
  services.document.getDocuments,
);
export const postDocument = createAsyncThunkAction(
  services.document.postDocument,
);
export const getDocument = createAsyncThunkAction(
  services.document.getDocument,
);
export const putDocument = createAsyncThunkAction(
  services.document.putDocument,
);
export const deleteDocument = createAsyncThunkAction(
  services.document.deleteDocument,
);

export type DocumentReturn = AsyncThunkReturnType<
  | typeof getDocuments
  | typeof postDocument
  | typeof getDocument
  | typeof putDocument
  | typeof deleteDocument
>;
export type DocumentEntity = DocumentReturn[0];
export type DocumentParams = DocumentReturn[1];
export type DocumentConfig = DocumentReturn[2];

export type DocumentAsyncThunkAction = toolkit.AsyncThunkAction<
  DocumentEntity,
  DocumentParams,
  DocumentConfig
>;

// Reducer
export type DocumentState = GeneratedState<Document>;
const initialState: DocumentState = GENERATED_INITIAL_STATE;

export const handleDocumentResponse = createResponseHandler<
  DocumentState,
  Document
>();

export const documentSlice = toolkit.createSlice({
  name: 'document',
  initialState,
  reducers: {},
  extraReducers: {
    [getDocuments.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getDocuments.fulfilled.type]: handleDocumentResponse,
    [getDocuments.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postDocument.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postDocument.fulfilled.type]: handleDocumentResponse,
    [postDocument.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getDocument.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getDocument.fulfilled.type]: handleDocumentResponse,
    [getDocument.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putDocument.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putDocument.fulfilled.type]: handleDocumentResponse,
    [putDocument.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteDocument.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteDocument.fulfilled.type]: handleDocumentResponse,
    [deleteDocument.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default documentSlice.reducer;
