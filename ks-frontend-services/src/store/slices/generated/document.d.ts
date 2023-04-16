import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Document } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getDocuments: import("@reduxjs/toolkit").AsyncThunk<Document[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postDocument: import("@reduxjs/toolkit").AsyncThunk<Document, {
    body: Document;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getDocument: import("@reduxjs/toolkit").AsyncThunk<Document, {
    params: import("../../../generated/operations/getDocument").GetDocumentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putDocument: import("@reduxjs/toolkit").AsyncThunk<Document, {
    params: import("../../../generated/operations/putDocument").PutDocumentRequestParameters;
    body: Document;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteDocument: import("@reduxjs/toolkit").AsyncThunk<Document, {
    params: import("../../../generated/operations/deleteDocument").DeleteDocumentRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type DocumentReturn = AsyncThunkReturnType<typeof getDocuments | typeof postDocument | typeof getDocument | typeof putDocument | typeof deleteDocument>;
export type DocumentEntity = DocumentReturn[0];
export type DocumentParams = DocumentReturn[1];
export type DocumentConfig = DocumentReturn[2];
export type DocumentAsyncThunkAction = AsyncThunkAction<DocumentEntity, DocumentParams, DocumentConfig>;
export type DocumentState = GeneratedState<Document>;
export declare const handleDocumentResponse: (state: DocumentState, action: {
    payload: Document | Document[];
    type: string;
}) => DocumentState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Document[];
    allIds: string[];
};
export declare const documentSlice: import("@reduxjs/toolkit").Slice<DocumentState, {
    fetched: (state: DocumentState, action: PayloadAction<Document[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Document[];
        allIds: string[];
    };
}, "document">;
declare const _default: import("redux").Reducer<DocumentState, import("redux").AnyAction>;
export default _default;
