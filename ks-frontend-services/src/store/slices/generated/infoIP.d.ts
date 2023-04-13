import * as toolkit from '@reduxjs/toolkit';
import { type InfoIP } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const infoIP: toolkit.AsyncThunk<InfoIP, import("../../types").SharedAsyncThunkActionArgs, {}>;
export type InfoIPReturn = AsyncThunkReturnType<typeof infoIP>;
export type InfoIPEntity = InfoIPReturn[0];
export type InfoIPParams = InfoIPReturn[1];
export type InfoIPConfig = InfoIPReturn[2];
export type InfoIPAsyncThunkAction = toolkit.AsyncThunkAction<InfoIPEntity, InfoIPParams, InfoIPConfig>;
export type InfoIPState = GeneratedState<InfoIP>;
export declare const handleInfoIPResponse: (state: InfoIPState, action: {
    payload: InfoIP;
    type: string;
}) => InfoIPState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<InfoIP>;
    allIds: string[];
};
export declare const infoIPSlice: toolkit.Slice<InfoIPState, {}, "infoIP">;
declare const _default: toolkit.Reducer<InfoIPState, toolkit.AnyAction>;
export default _default;
