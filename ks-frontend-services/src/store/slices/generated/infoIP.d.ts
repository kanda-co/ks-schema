import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type InfoIP } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoIP: import("@reduxjs/toolkit").AsyncThunk<InfoIP, import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoIPReturn = AsyncThunkReturnType<typeof infoIP>;
export type InfoIPEntity = InfoIPReturn[0];
export type InfoIPParams = InfoIPReturn[1];
export type InfoIPConfig = InfoIPReturn[2];
export type InfoIPAsyncThunkAction = AsyncThunkAction<InfoIPEntity, InfoIPParams, InfoIPConfig>;
export type InfoIPState = GeneratedState<InfoIP>;
export declare const handleInfoIPResponse: (state: InfoIPState, action: {
    payload: InfoIP | InfoIP[];
    type: string;
}) => InfoIPState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: InfoIP[];
    allIds: string[];
};
export declare const infoIPSlice: import("@reduxjs/toolkit").Slice<InfoIPState, {
    fetched: (state: InfoIPState, action: PayloadAction<InfoIP[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: InfoIP[];
        allIds: string[];
    };
}, "infoIP">;
declare const _default: import("redux").Reducer<InfoIPState, import("redux").AnyAction>;
export default _default;
