// Imports
import { AsyncThunkAction, createSlice } from '@reduxjs/toolkit';
import { type Task, services } from '../../';
import { GENERATED_INITIAL_STATE } from '../constants';
import { createAsyncThunkAction, createResponseHandler } from '../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../types';

// Service methods
export const runner = createAsyncThunkAction(services.task.runner);

export type TaskReturn = AsyncThunkReturnType<typeof runner>;
export type TaskEntity = TaskReturn[0];
export type TaskParams = TaskReturn[1];
export type TaskConfig = TaskReturn[2];

export type TaskAsyncThunkAction = AsyncThunkAction<
  TaskEntity,
  TaskParams,
  TaskConfig
>;

// Reducer
export type TaskState = GeneratedState<Task>;
const initialState: TaskState = GENERATED_INITIAL_STATE;

export const handleTaskResponse = createResponseHandler<TaskState, Task>();

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: {
    [runner.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [runner.fulfilled.type]: handleTaskResponse,
    [runner.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default taskSlice.reducer;
