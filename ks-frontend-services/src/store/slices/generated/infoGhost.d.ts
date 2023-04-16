import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type InfoGhost } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoGhost: import("@reduxjs/toolkit").AsyncThunk<InfoGhost, {
    body: InfoGhost;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoGhostReturn = AsyncThunkReturnType<typeof infoGhost>;
export type InfoGhostEntity = InfoGhostReturn[0];
export type InfoGhostParams = InfoGhostReturn[1];
export type InfoGhostConfig = InfoGhostReturn[2];
export type InfoGhostAsyncThunkAction = AsyncThunkAction<InfoGhostEntity, InfoGhostParams, InfoGhostConfig>;
export type InfoGhostState = GeneratedState<InfoGhost>;
export declare const handleInfoGhostResponse: (state: InfoGhostState, action: {
    payload: InfoGhost | InfoGhost[];
    type: string;
}) => InfoGhostState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: InfoGhost[];
    allIds: string[];
};
export declare const infoGhostSlice: import("@reduxjs/toolkit").Slice<InfoGhostState, {
    fetched: (state: InfoGhostState, action: PayloadAction<InfoGhost[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: InfoGhost[];
        allIds: string[];
    };
}, "infoGhost">;
declare const _default: import("redux").Reducer<InfoGhostState, import("redux").AnyAction>;
export default _default;
