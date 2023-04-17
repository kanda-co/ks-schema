export const NORMALIZED_INITIAL_STATE = {
  byId: {},
};

export const GENERATED_INITIAL_STATE = {
  ...NORMALIZED_INITIAL_STATE,
  id: undefined,
  fetchedList: false,
  isLoading: true,
  isSubmitting: false,
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
