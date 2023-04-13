import * as toolkit from '@reduxjs/toolkit';
import { type Monitor } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getMonitors: toolkit.AsyncThunk<Monitor[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postMonitor: toolkit.AsyncThunk<Monitor, {
    body: Monitor;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getMonitor: toolkit.AsyncThunk<Monitor, {
    params: import("../../../generated/operations/getMonitor").GetMonitorRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putMonitor: toolkit.AsyncThunk<Monitor, {
    params: import("../../../generated/operations/putMonitor").PutMonitorRequestParameters;
    body: Monitor;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteMonitor: toolkit.AsyncThunk<Monitor, {
    params: import("../../../generated/operations/deleteMonitor").DeleteMonitorRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postMonitorFlag: toolkit.AsyncThunk<Monitor, {
    params: import("../../../generated/operations/postMonitorFlag").PostMonitorFlagRequestParameters;
    body: import("../../../").Flag;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type MonitorReturn = AsyncThunkReturnType<typeof getMonitors | typeof postMonitor | typeof getMonitor | typeof putMonitor | typeof deleteMonitor | typeof postMonitorFlag>;
export type MonitorEntity = MonitorReturn[0];
export type MonitorParams = MonitorReturn[1];
export type MonitorConfig = MonitorReturn[2];
export type MonitorAsyncThunkAction = toolkit.AsyncThunkAction<MonitorEntity, MonitorParams, MonitorConfig>;
export type MonitorState = GeneratedState<Monitor>;
export declare const handleMonitorResponse: (state: MonitorState, action: {
    payload: Monitor;
    type: string;
}) => MonitorState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    byId: import("../../../types").StringIndexedObject<Monitor>;
    allIds: string[];
};
export declare const monitorSlice: toolkit.Slice<MonitorState, {}, "monitor">;
declare const _default: toolkit.Reducer<MonitorState, toolkit.AnyAction>;
export default _default;
