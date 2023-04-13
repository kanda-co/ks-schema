// Imports
import * as toolkit from '@reduxjs/toolkit';
import { type Monitor, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getMonitors = createAsyncThunkAction(services.monitor.getMonitors);
export const postMonitor = createAsyncThunkAction(services.monitor.postMonitor);
export const getMonitor = createAsyncThunkAction(services.monitor.getMonitor);
export const putMonitor = createAsyncThunkAction(services.monitor.putMonitor);
export const deleteMonitor = createAsyncThunkAction(
  services.monitor.deleteMonitor,
);
export const postMonitorFlag = createAsyncThunkAction(
  services.monitor.postMonitorFlag,
);

export type MonitorReturn = AsyncThunkReturnType<
  | typeof getMonitors
  | typeof postMonitor
  | typeof getMonitor
  | typeof putMonitor
  | typeof deleteMonitor
  | typeof postMonitorFlag
>;
export type MonitorEntity = MonitorReturn[0];
export type MonitorParams = MonitorReturn[1];
export type MonitorConfig = MonitorReturn[2];

export type MonitorAsyncThunkAction = toolkit.AsyncThunkAction<
  MonitorEntity,
  MonitorParams,
  MonitorConfig
>;

// Reducer
export type MonitorState = GeneratedState<Monitor>;
const initialState: MonitorState = GENERATED_INITIAL_STATE;

export const handleMonitorResponse = createResponseHandler<
  MonitorState,
  Monitor
>();

export const monitorSlice = toolkit.createSlice({
  name: 'monitor',
  initialState,
  reducers: {},
  extraReducers: {
    [getMonitors.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getMonitors.fulfilled.type]: handleMonitorResponse,
    [getMonitors.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postMonitor.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postMonitor.fulfilled.type]: handleMonitorResponse,
    [postMonitor.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getMonitor.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getMonitor.fulfilled.type]: handleMonitorResponse,
    [getMonitor.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putMonitor.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putMonitor.fulfilled.type]: handleMonitorResponse,
    [putMonitor.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteMonitor.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteMonitor.fulfilled.type]: handleMonitorResponse,
    [deleteMonitor.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postMonitorFlag.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postMonitorFlag.fulfilled.type]: handleMonitorResponse,
    [postMonitorFlag.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default monitorSlice.reducer;
