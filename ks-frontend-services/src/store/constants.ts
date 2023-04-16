export const NORMALIZED_INITIAL_STATE = {
  data: [],
  allIds: [],
};

export const GENERATED_INITIAL_STATE = {
  ...NORMALIZED_INITIAL_STATE,
  id: undefined,
  fetchedList: false,
  isLoading: true,
  isSubmitting: false,
};
