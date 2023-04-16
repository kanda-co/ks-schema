import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type InfoQuery } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoQuery: import("@reduxjs/toolkit").AsyncThunk<InfoQuery, {
    body: InfoQuery;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoQueryReturn = AsyncThunkReturnType<typeof infoQuery>;
export type InfoQueryEntity = InfoQueryReturn[0];
export type InfoQueryParams = InfoQueryReturn[1];
export type InfoQueryConfig = InfoQueryReturn[2];
export type InfoQueryAsyncThunkAction = AsyncThunkAction<InfoQueryEntity, InfoQueryParams, InfoQueryConfig>;
export type InfoQueryState = GeneratedState<InfoQuery>;
export declare const handleInfoQueryResponse: (state: InfoQueryState, action: {
    payload: InfoQuery | InfoQuery[];
    type: string;
}) => InfoQueryState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: InfoQuery[];
    allIds: string[];
};
export declare const infoQuerySlice: import("@reduxjs/toolkit").Slice<InfoQueryState, {
    fetched: (state: InfoQueryState, action: PayloadAction<InfoQuery[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: InfoQuery[];
        allIds: string[];
    };
}, "infoQuery">;
declare const _default: import("redux").Reducer<InfoQueryState, import("redux").AnyAction>;
export default _default;
