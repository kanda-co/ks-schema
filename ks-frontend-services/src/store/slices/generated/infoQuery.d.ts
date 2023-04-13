import * as toolkit from '@reduxjs/toolkit';
import { type InfoQuery } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoQuery: toolkit.AsyncThunk<InfoQuery, {
    body: InfoQuery;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoQueryReturn = AsyncThunkReturnType<typeof infoQuery>;
export type InfoQueryEntity = InfoQueryReturn[0];
export type InfoQueryParams = InfoQueryReturn[1];
export type InfoQueryConfig = InfoQueryReturn[2];
export type InfoQueryAsyncThunkAction = toolkit.AsyncThunkAction<InfoQueryEntity, InfoQueryParams, InfoQueryConfig>;
export type InfoQueryState = GeneratedState<InfoQuery>;
export declare const handleInfoQueryResponse: (state: InfoQueryState, action: {
    payload: InfoQuery;
    type: string;
}) => InfoQueryState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<InfoQuery>;
    allIds: string[];
};
export declare const infoQuerySlice: toolkit.Slice<InfoQueryState, {}, "infoQuery">;
declare const _default: toolkit.Reducer<InfoQueryState, toolkit.AnyAction>;
export default _default;
