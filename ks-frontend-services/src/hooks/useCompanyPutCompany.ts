import { PutCompanyRequestParameters } from '../generated/operations/putCompany';
import services from '../service';
import useSubmit from './useSubmit';
import { Company } from '../generated/components/schemas/Company';
import { Job } from '../generated/components/schemas/Job';
import type { PutCompanyRequestFunction } from '../generated/operations/putCompany';
import {
  PayoutJobRequestFunction,
  PayoutJobRequestParameters,
} from '../generated/operations/payoutJob';

export interface CompanyPutCompanyHook {}

export default function useCompanyPutCompany() {
  return useSubmit<
    PutCompanyRequestFunction,
    Company,
    PutCompanyRequestParameters,
    Company
  >(services.company.putCompany);
}

function useJobPayoutJob() {
  return useSubmit<
    PayoutJobRequestFunction,
    Job,
    PayoutJobRequestParameters,
    undefined
  >(services.job.payoutJob);
}

function useMyOtherHook() {
  const { data } = useCompanyPutCompany();
  const { submit } = useJobPayoutJob();

  submit({ params: { jobId: '123' } });
}
