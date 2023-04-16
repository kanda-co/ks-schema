import { type PayloadAction, type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Job } from '../../../';
import type { AsyncThunkReturnType, GeneratedState } from '../../types';
export declare const getJobs: import("@reduxjs/toolkit").AsyncThunk<Job[], import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const postJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    body: Job;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const getJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/getJob").GetJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const putJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/putJob").PutJobRequestParameters;
    body: Job;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const deleteJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/deleteJob").DeleteJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const sendJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/sendJob").SendJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const resendJob: import("@reduxjs/toolkit").AsyncThunk<void, {
    params: import("../../../generated/operations/resendJob").ResendJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const checkJob: import("@reduxjs/toolkit").AsyncThunk<import("../../../").JobCreditState, {
    params: import("../../../generated/operations/checkJob").CheckJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const completeJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/completeJob").CompleteJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const archiveJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/archiveJob").ArchiveJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const unarchiveJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/unarchiveJob").UnarchiveJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const applyJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/applyJob").ApplyJobRequestParameters;
    body: import("../../../").CustomerOptions;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const reapplyJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/reapplyJob").ReapplyJobRequestParameters;
    body: unknown;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const payJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/payJob").PayJobRequestParameters;
    body: import("../../../").PaymentOption;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const viewJobSatNote: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/viewJobSatNote").ViewJobSatNoteRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const signJobSateNote: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/signJobSateNote").SignJobSateNoteRequestParameters;
    body: import("../../../").SatNote;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const approveJobSatNote: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const payoutJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/payoutJob").PayoutJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const payoutsJob: import("@reduxjs/toolkit").AsyncThunk<import("../../../").Tally[], {
    params: import("../../../generated/operations/payoutsJob").PayoutsJobRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const overrideJob: import("@reduxjs/toolkit").AsyncThunk<Job, {
    params: import("../../../generated/operations/overrideJob").OverrideJobRequestParameters;
    body: import("../../../").JobOverride;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const jobCheckoutLink: import("@reduxjs/toolkit").AsyncThunk<import("../../../").RedirectURLs, {
    params: import("../../../generated/operations/jobCheckoutLink").JobCheckoutLinkRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export declare const jobCompanyInfo: import("@reduxjs/toolkit").AsyncThunk<import("../../../").JobCompanyInfo, {
    params: import("../../../generated/operations/jobCompanyInfo").JobCompanyInfoRequestParameters;
} & import("../../types").SharedAsyncThunkActionArgs, {}>;
export type JobReturn = AsyncThunkReturnType<typeof getJobs | typeof postJob | typeof getJob | typeof putJob | typeof deleteJob | typeof sendJob | typeof resendJob | typeof checkJob | typeof completeJob | typeof archiveJob | typeof unarchiveJob | typeof applyJob | typeof reapplyJob | typeof payJob | typeof viewJobSatNote | typeof signJobSateNote | typeof approveJobSatNote | typeof payoutJob | typeof payoutsJob | typeof overrideJob | typeof jobCheckoutLink | typeof jobCompanyInfo>;
export type JobEntity = JobReturn[0];
export type JobParams = JobReturn[1];
export type JobConfig = JobReturn[2];
export type JobAsyncThunkAction = AsyncThunkAction<JobEntity, JobParams, JobConfig>;
export type JobState = GeneratedState<Job>;
export declare const handleJobResponse: (state: JobState, action: {
    payload: Job | Job[];
    type: string;
}) => JobState & {
    isLoading: boolean;
    isSubmitting: boolean;
    fetchedList: boolean;
    data: Job[];
    allIds: string[];
};
export declare const jobSlice: import("@reduxjs/toolkit").Slice<JobState, {
    fetched: (state: JobState, action: PayloadAction<Job[]>) => {
        id?: string;
        fetchedList: boolean;
        isLoading: boolean;
        isSubmitting: boolean;
        data: Job[];
        allIds: string[];
    };
}, "job">;
declare const _default: import("redux").Reducer<JobState, import("redux").AnyAction>;
export default _default;
