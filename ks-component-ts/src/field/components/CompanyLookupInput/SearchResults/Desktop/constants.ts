export const CLASS_NAMES = {
  container: "flex flex-1 flex-col",
  card: "flex flex-1 w-full max-w-120 z-10 bg-neutral-000 max-h-64 overflow-y-scroll overflow-x-hidden !rounded",
};

export const SKELETON_DATA = [
  { refIndex: "loading-0" },
  { refIndex: "loading-1" },
];

export const SEARCH_OPTIONS = {
  keys: [
    { name: "name", weight: 1 },
    { name: "address", weight: 1 },
  ],
  includeMatches: true,
  matchAllOnEmptyQuery: false,
  limit: 2,
};

export const BUTTON_PROPS = {
  icon: "plus",
  left: true,
  size: 14,
  variant: "light-grey",
  className: "mt-4 mb-6 w-full",
};
