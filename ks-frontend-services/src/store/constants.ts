import { GeneratedState } from './types';

export const GENERATED_STATE: Omit<GeneratedState<{}>, 'entities' | 'ids'> = {
  id: '',
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
