import * as toolkit from '@reduxjs/toolkit';
import { type InfoGhost } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoGhost: toolkit.AsyncThunk<InfoGhost, {
    body: InfoGhost;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoGhostReturn = AsyncThunkReturnType<typeof infoGhost>;
export type InfoGhostEntity = InfoGhostReturn[0];
export type InfoGhostParams = InfoGhostReturn[1];
export type InfoGhostConfig = InfoGhostReturn[2];
export type InfoGhostAsyncThunkAction = toolkit.AsyncThunkAction<InfoGhostEntity, InfoGhostParams, InfoGhostConfig>;
export type InfoGhostState = GeneratedState<InfoGhost>;
export declare const handleInfoGhostResponse: (state: InfoGhostState, action: {
    payload: InfoGhost;
    type: string;
}) => InfoGhostState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<InfoGhost>;
    allIds: string[];
};
export declare const infoGhostSlice: toolkit.Slice<InfoGhostState, {}, "infoGhost">;
declare const _default: toolkit.Reducer<InfoGhostState, toolkit.AnyAction>;
export default _default;
