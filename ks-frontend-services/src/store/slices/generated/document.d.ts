import * as toolkit from '@reduxjs/toolkit';
import { type Document } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getDocuments: toolkit.AsyncThunk<Document[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postDocument: toolkit.AsyncThunk<Document, {
    body: Document;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getDocument: toolkit.AsyncThunk<Document, {
    params: import("../../../generated/operations/getDocument").GetDocumentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putDocument: toolkit.AsyncThunk<Document, {
    params: import("../../../generated/operations/putDocument").PutDocumentRequestParameters;
    body: Document;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteDocument: toolkit.AsyncThunk<Document, {
    params: import("../../../generated/operations/deleteDocument").DeleteDocumentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type DocumentReturn = AsyncThunkReturnType<typeof getDocuments | typeof postDocument | typeof getDocument | typeof putDocument | typeof deleteDocument>;
export type DocumentEntity = DocumentReturn[0];
export type DocumentParams = DocumentReturn[1];
export type DocumentConfig = DocumentReturn[2];
export type DocumentAsyncThunkAction = toolkit.AsyncThunkAction<DocumentEntity, DocumentParams, DocumentConfig>;
export type DocumentState = GeneratedState<Document>;
export declare const handleDocumentResponse: (state: DocumentState, action: {
    payload: Document;
    type: string;
}) => DocumentState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Document>;
    allIds: string[];
};
export declare const documentSlice: toolkit.Slice<DocumentState, {}, "document">;
declare const _default: toolkit.Reducer<DocumentState, toolkit.AnyAction>;
export default _default;
