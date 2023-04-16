import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Monitor } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getMonitors: import("@reduxjs/toolkit").AsyncThunk<Monitor[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postMonitor: import("@reduxjs/toolkit").AsyncThunk<Monitor, {
    body: Monitor;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getMonitor: import("@reduxjs/toolkit").AsyncThunk<Monitor, {
    params: import("../../../generated/operations/getMonitor").GetMonitorRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putMonitor: import("@reduxjs/toolkit").AsyncThunk<Monitor, {
    params: import("../../../generated/operations/putMonitor").PutMonitorRequestParameters;
    body: Monitor;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteMonitor: import("@reduxjs/toolkit").AsyncThunk<Monitor, {
    params: import("../../../generated/operations/deleteMonitor").DeleteMonitorRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postMonitorFlag: import("@reduxjs/toolkit").AsyncThunk<Monitor, {
    params: import("../../../generated/operations/postMonitorFlag").PostMonitorFlagRequestParameters;
    body: import("../../../").Flag;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type MonitorReturn = AsyncThunkReturnType<typeof getMonitors | typeof postMonitor | typeof getMonitor | typeof putMonitor | typeof deleteMonitor | typeof postMonitorFlag>;
export type MonitorEntity = MonitorReturn[0];
export type MonitorParams = MonitorReturn[1];
export type MonitorConfig = MonitorReturn[2];
export type MonitorAsyncThunkAction = AsyncThunkAction<MonitorEntity, MonitorParams, MonitorConfig>;
export type MonitorState = GeneratedState<Monitor>;
export declare const handleMonitorResponse: (state: MonitorState, action: {
    payload: Monitor | Monitor[];
    type: string;
}) => MonitorState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Monitor[];
    allIds: string[];
};
export declare const monitorSlice: import("@reduxjs/toolkit").Slice<MonitorState, {
    fetched: (state: MonitorState, action: PayloadAction<Monitor[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Monitor[];
        allIds: string[];
    };
}, "monitor">;
declare const _default: import("redux").Reducer<MonitorState, import("redux").AnyAction>;
export default _default;
