// Imports
import * as toolkit from '@reduxjs/toolkit';
import { type Job, services } from '../../../';
import { GENERATED_INITIAL_STATE } from '../../constants';
import { createAsyncThunkAction, createResponseHandler } from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';

// Service methods
export const getJobs = createAsyncThunkAction(services.job.getJobs);
export const postJob = createAsyncThunkAction(services.job.postJob);
export const getJob = createAsyncThunkAction(services.job.getJob);
export const putJob = createAsyncThunkAction(services.job.putJob);
export const deleteJob = createAsyncThunkAction(services.job.deleteJob);
export const sendJob = createAsyncThunkAction(services.job.sendJob);
export const resendJob = createAsyncThunkAction(services.job.resendJob);
export const checkJob = createAsyncThunkAction(services.job.checkJob);
export const completeJob = createAsyncThunkAction(services.job.completeJob);
export const archiveJob = createAsyncThunkAction(services.job.archiveJob);
export const unarchiveJob = createAsyncThunkAction(services.job.unarchiveJob);
export const applyJob = createAsyncThunkAction(services.job.applyJob);
export const reapplyJob = createAsyncThunkAction(services.job.reapplyJob);
export const payJob = createAsyncThunkAction(services.job.payJob);
export const viewJobSatNote = createAsyncThunkAction(
  services.job.viewJobSatNote,
);
export const signJobSateNote = createAsyncThunkAction(
  services.job.signJobSateNote,
);
export const approveJobSatNote = createAsyncThunkAction(
  services.job.approveJobSatNote,
);
export const payoutJob = createAsyncThunkAction(services.job.payoutJob);
export const payoutsJob = createAsyncThunkAction(services.job.payoutsJob);
export const overrideJob = createAsyncThunkAction(services.job.overrideJob);
export const jobCheckoutLink = createAsyncThunkAction(
  services.job.jobCheckoutLink,
);
export const jobCompanyInfo = createAsyncThunkAction(
  services.job.jobCompanyInfo,
);

export type JobReturn = AsyncThunkReturnType<
  | typeof getJobs
  | typeof postJob
  | typeof getJob
  | typeof putJob
  | typeof deleteJob
  | typeof sendJob
  | typeof resendJob
  | typeof checkJob
  | typeof completeJob
  | typeof archiveJob
  | typeof unarchiveJob
  | typeof applyJob
  | typeof reapplyJob
  | typeof payJob
  | typeof viewJobSatNote
  | typeof signJobSateNote
  | typeof approveJobSatNote
  | typeof payoutJob
  | typeof payoutsJob
  | typeof overrideJob
  | typeof jobCheckoutLink
  | typeof jobCompanyInfo
>;
export type JobEntity = JobReturn[0];
export type JobParams = JobReturn[1];
export type JobConfig = JobReturn[2];

export type JobAsyncThunkAction = toolkit.AsyncThunkAction<
  JobEntity,
  JobParams,
  JobConfig
>;

// Reducer
export type JobState = GeneratedState<Job>;
const initialState: JobState = GENERATED_INITIAL_STATE;

export const handleJobResponse = createResponseHandler<JobState, Job>();

export const jobSlice = toolkit.createSlice({
  name: 'job',
  initialState,
  reducers: {},
  extraReducers: {
    [getJobs.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getJobs.fulfilled.type]: handleJobResponse,
    [getJobs.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [postJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [postJob.fulfilled.type]: handleJobResponse,
    [postJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [getJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [getJob.fulfilled.type]: handleJobResponse,
    [getJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [putJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [putJob.fulfilled.type]: handleJobResponse,
    [putJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [deleteJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [deleteJob.fulfilled.type]: handleJobResponse,
    [deleteJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [sendJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [sendJob.fulfilled.type]: handleJobResponse,
    [sendJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [resendJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [resendJob.fulfilled.type]: handleJobResponse,
    [resendJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [checkJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [checkJob.fulfilled.type]: handleJobResponse,
    [checkJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [completeJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [completeJob.fulfilled.type]: handleJobResponse,
    [completeJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [archiveJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [archiveJob.fulfilled.type]: handleJobResponse,
    [archiveJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [unarchiveJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [unarchiveJob.fulfilled.type]: handleJobResponse,
    [unarchiveJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [applyJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [applyJob.fulfilled.type]: handleJobResponse,
    [applyJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [reapplyJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [reapplyJob.fulfilled.type]: handleJobResponse,
    [reapplyJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [payJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [payJob.fulfilled.type]: handleJobResponse,
    [payJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [viewJobSatNote.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [viewJobSatNote.fulfilled.type]: handleJobResponse,
    [viewJobSatNote.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [signJobSateNote.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [signJobSateNote.fulfilled.type]: handleJobResponse,
    [signJobSateNote.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [approveJobSatNote.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [approveJobSatNote.fulfilled.type]: handleJobResponse,
    [approveJobSatNote.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [payoutJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [payoutJob.fulfilled.type]: handleJobResponse,
    [payoutJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [payoutsJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [payoutsJob.fulfilled.type]: handleJobResponse,
    [payoutsJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [overrideJob.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [overrideJob.fulfilled.type]: handleJobResponse,
    [overrideJob.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [jobCheckoutLink.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [jobCheckoutLink.fulfilled.type]: handleJobResponse,
    [jobCheckoutLink.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
    [jobCompanyInfo.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [jobCompanyInfo.fulfilled.type]: handleJobResponse,
    [jobCompanyInfo.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
  },
});

export default jobSlice.reducer;
