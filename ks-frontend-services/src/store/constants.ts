import { GeneratedState } from './types';

export const GENERATED_STATE: Omit<GeneratedState<{}>, 'entities' | 'ids'> = {
  raw: undefined,
  isLoading: false,
  isSubmitting: false,
  hasFetched: false,
  fetchedList: false,
  chainedRequest: false,
  error: undefined,
};
export const INFO_ENTITY_KEY = 'infoEntity.getInfoEntity';

export const INFO_SEARCH_KEY = 'infoSearch.infoSearch';

export const IGNORED_ACTIONS = [
  'adhoc',
  'checkJob',
  'exportJobPayouts',
  'exportFcaApproved',
  'tradeQuoteApprovalLead',
  'connectTradesLead',
  'matchTradesLead',
  'acceptedJobSummaryLead',
  'payoutsJob',
  'jobCheckoutLink',
  'jobCompanyInfo',
  'infoSession',
  'postCompanyBilling',
  'postCompanyDirectorVerification',
  'postCompanyReferrals',
  'getCompanyDirectorVerification',
];

export type SingleActionReducers = {
  entity: string;
  action: string;
  actionEntity?: string;
  // If true, this reducer is automatically ignored
  onlyActionForEntity?: boolean;
};

// An array of actions that return a void payload
export const VOID_ACTIONS = ['resendJob'];

export const SINGLE_ACTION_REDUCERS: SingleActionReducers[] = [
  {
    entity: 'job',
    action: 'ExportJobPayouts',
    actionEntity: 'ExportCSV',
  },
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
  {
    entity: 'company',
    action: 'PostCompanyBilling',
    actionEntity: 'RedirectURLs',
  },
  {
    entity: 'company',
    action: 'PostCompanyReferrals',
    actionEntity: 'Referral',
  },
  {
    entity: 'company',
    action: 'ExportFcaApproved',
    actionEntity: 'ExportCSV',
  },
  {
    entity: 'infoEnterpriseRole',
    action: 'InfoEnterpriseRole',
    actionEntity: 'EnterpriseUserRole',
    onlyActionForEntity: true,
  },
];

export const ENTITY_NAME_OVERRIDES = {
  InfoEnterprise: 'Enterprise',
};
