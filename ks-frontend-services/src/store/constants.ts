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
  'payoutsJob',
  'jobCheckoutLink',
  'jobCompanyInfo',
  'infoSession',
  'postCompanyDirectorVerification',
  'getCompanyDirectorVerification',
];

export interface ActionSpecificReducer {
  entity: string;
  action: string;
}

export const ACTION_SPECIFIC_REDUCERS: ActionSpecificReducer[] = [
  { entity: 'Job', action: 'jobCompanyInfo' },
];
