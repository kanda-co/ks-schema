export const CLASS_NAMES = {
  containerBase: "overflow-hidden input-container",
  iconBase: "stroke-current",
  input: {
    base: "focus:outline-none w-full bg-transparent",
    italic: "italic",
  },
  iconContainer: {
    base: "flex pointer-events-none h-full justify-center items-center my-auto",
    "@iconVariant": {
      default: "pl-4",
      dark: "min-w-10 bg-neutral-200 icon-stroke-md",
      search: "pl-4 pr-3",
    },
  },
};

export const ICON_PROPS = {
  default: {
    size: 20,
  },
  search: {
    size: 20,
  },
  dark: {
    size: 16,
  },
};
