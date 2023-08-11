import { GeneratedState } from './types';

export const GENERATED_STATE: Omit<GeneratedState<{}>, 'entities' | 'ids'> = {
  isLoading: false,
  isSubmitting: false,
  fetchedList: false,
  chainedRequest: false,
  error: undefined,
};
export const INFO_ENTITY_KEY = 'infoEntity.getInfoEntity';

export const IGNORED_ACTIONS = [
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

// An array of actions that return a void payload
export const VOID_ACTIONS = ['resendJob'];

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
  {
    entity: 'company',
    action: 'PostCompanyDirectorVerification',
    actionEntity: 'InfoCompany',
  },
  {
    entity: 'company',
    action: 'GetCompanyDirectorVerification',
    actionEntity: 'InfoCompany',
  },
];

export const ENTITY_NAME_OVERRIDES = {
  InfoEnterprise: 'Enterprise',
};
