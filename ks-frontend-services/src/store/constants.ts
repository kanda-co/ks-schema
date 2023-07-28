import { GeneratedState } from './types';

export const GENERATED_STATE: Omit<GeneratedState<{}>, 'entities' | 'ids'> = {
  isLoading: false,
  isSubmitting: false,
  fetchedList: false,
};
export const INFO_ENTITY_KEY = 'infoEntity.getInfoEntity';

export const IGNORED_ACTIONS = [
  'resendJob',
  'checkJob',
  'tradeQuoteApprovalLead',
  'connectTradesLead',
  'matchTradesLead',
  'acceptedJobSummaryLead',
  'payoutsJob',
  'jobCheckoutLink',
  'jobCompanyInfo',
  'infoSession',
  'postCompanyDirectorVerification',
  'getCompanyDirectorVerification',
];

export interface SingleActionReducers {
  entity: string;
  action: string;
  actionEntity?: string;
}

export const SINGLE_ACTION_REDUCERS: SingleActionReducers[] = [
  { entity: 'job', action: 'JobCompanyInfo' },
  { entity: 'job', action: 'CheckJob', actionEntity: 'JobCreditState' },
  {
    entity: 'lead',
    action: 'TradeQuoteApprovalLead',
    actionEntity: 'Job',
  },
  {
    entity: 'lead',
    action: 'ConnectTradesLead',
    actionEntity: 'TradeSummary',
  },
  {
    entity: 'lead',
    action: 'MatchTradesLead',
    actionEntity: 'TradeSummary',
  },
  {
    entity: 'lead',
    action: 'AcceptedJobSummaryLead',
    actionEntity: 'LeadJobSummary',
  },
];

export const ENTITY_NAME_OVERRIDES = {
  InfoEnterprise: 'Enterprise',
};
