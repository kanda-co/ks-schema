import { FieldWrapperType, StringIndexedObject, Theme } from "~/types";

export const DEFAULT_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-100 border caret-turquoise-300",
  inputClasses: "text-style-g text-neutral-900 placeholder-neutral-600",
  focusClasses:
    "border-solid border-transparent focus:outline-none focus:border-turquoise-300 focus:bg-neutral-000",
  paddingClasses: "px-4 py-3.25",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-6 text-left",
    error: "mt-2 text-style-h text-red-200",
    warning: "mt-2 text-style-h text-neutral-600",
    label: "w-full text-style-h-em text-neutral-600 mb-2",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

export const DEFAULT_WHITE_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-000 border caret-turquoise-300",
  inputClasses: "text-style-g text-neutral-900 placeholder-neutral-600",
  focusClasses:
    "focus:px-2 border-solid border-transparent focus:outline-none focus:border-turquoise-300 focus:bg-neutral-000",
  paddingClasses: "py-2",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "px-2 border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-6 text-left",
    error: "mt-2 text-style-h text-red-200",
    label: "w-full text-style-h-em text-neutral-600 mb-2",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const EMPHASIZED_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-100 border caret-turquoise-300",
  inputClasses: "text-style-f text-neutral-900 placeholder-neutral-400",
  focusClasses:
    "focus:outline-none border-solid border-transparent focus:border-turquoise-300 focus:bg-neutral-000",
  paddingClasses: "px-4 py-3.25",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-6 text-left",
    error: "mt-2 text-style-h text-red-200",
    label: "w-full text-style-f-em text-neutral-900 mb-6",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const CLEAN_THEME = {
  fieldWrapper: "Simple" as FieldWrapperType,
  baseClasses:
    "rounded-lg text-style-g flex w-full text-neutral-900 placeholder-neutral-400 mb-1 caret-turquoise-300 text-left",
  focusClasses: "focus:outline-none",
  paddingClasses: "py-3.25",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "ring-1 ring-red-200 px-2" : "",
};

const NARROW_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses: "rounded-lg flex w-full border caret-turquoise-300",
  inputClasses: "text-style-f text-neutral-800 placeholder-neutral-400",
  focusClasses:
    "focus:px-2 focus:outline-none border-solid border-transparent focus:border-turquoise-300 focus:border focus:bg-neutral-000",
  paddingClasses: "py-1",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error
      ? "px-2 border-solid border-transparent border-red-200 border"
      : "pr-4",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-4 text-left",
    error: "hidden",
    label: "w-full text-style-h-em text-neutral-600 mb-1",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const NARROW_UNFOCUS_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses: "rounded-lg flex w-full border caret-turquoise-300",
  inputClasses: "text-style-f text-neutral-800 placeholder-neutral-400",
  focusClasses:
    "focus:px-2 focus:outline-none border-solid border-transparent focus:border-turquoise-300 focus:border focus:bg-neutral-000",
  paddingClasses: "py-1",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error
      ? "px-2 border-solid border-transparent border-red-200 border"
      : "pr-4",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-0 text-left",
    error: "hidden",
    label: "hidden",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const LARGE_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses: "flex w-full caret-turquoise-300 text-left",
  inputClasses: "text-32-40-em text-neutral-700 placeholder-neutral-300",
  focusClasses: "focus:outline-none",
  paddingClasses: "",
  skeletonClasses: "w-2/6",
  makeErrorClasses: () => "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-6 text-left",
    error: "mt-1 text-style-h text-red-200",
    label: "w-full text-18-22-em text-neutral-900 mb-2",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const MEDIUM_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses: "flex w-full caret-turquoise-300 text-left",
  inputClasses: "text-28-32-em text-neutral-700 placeholder-neutral-300",
  focusClasses: "focus:outline-none",
  paddingClasses: "",
  skeletonClasses: "w-2/6",
  makeErrorClasses: () => "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-6 text-left",
    error: "mt-1 text-style-h text-red-200",
    label: "w-full text-14-22-em text-neutral-900 mb-2",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const INLINE_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses: "flex w-full caret-lavender-300",
  inputClasses: "text-style-g text-neutral-900 placeholder-neutral-500",
  focusClasses: "focus:outline-none",
  paddingClasses: "",
  skeletonClasses: "w-2/6",
  makeErrorClasses: () => "",
  wrapperClasses: {
    baseContainer: "flex flex-col relative text-left",
    error: "text-style-k text-red-200",
    label: "hidden",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const FILLED_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-000 border caret-turquoise-300",
  inputClasses: "text-style-g text-neutral-900 placeholder-neutral-600",
  focusClasses:
    "border-solid border-transparent focus:outline-none focus:border-turquoise-300 focus:bg-neutral-000",
  paddingClasses: "px-4 py-3.25",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer:
      "flex flex-col mb-6 bg-neutral-100 rounded-lg py-4 px-3 text-left",
    error: "mt-2 text-style-h text-red-200",
    label: "w-full text-style-g-em text-neutral-600 mb-2",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const OUTLINE_NARROW_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-000 caret-lavender-300 border border-neutral-300 text-left",
  inputClasses: "text-style-h text-neutral-900 placeholder-neutral-500",
  focusClasses:
    "border-solid border-transparent focus:outline-none focus:border-turquoise-300 focus:bg-neutral-000",
  paddingClasses: "px-3 py-2",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-4",
    error: "mt-2 text-style-h text-red-200",
    label: "w-full text-style-h-em text-neutral-600 mb-2",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const CUSTOMER_CHECKOUT_THEME = {
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-100 border caret-turquoise-300",
  inputClasses: "text-style-g text-neutral-900 placeholder-neutral-600",
  focusClasses:
    "border-solid border-transparent focus:outline-none focus:border-turquoise-300 focus:bg-neutral-000",
  paddingClasses: "px-4 py-3.25",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer: "flex flex-col mb-10 text-left",
    error: "mt-2 text-style-h text-red-200",
    label: "w-full text-style-g-em text-neutral-500 mb-3",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const GROUP_DEFAULT_THEME = {
  themeWrapper: "flex flex-col w-full mb: Theme-6",
  fieldWrapper: "Default" as FieldWrapperType,
  baseClasses:
    "rounded-lg flex w-full bg-neutral-100 border caret-turquoise-300",
  inputClasses: "text-style-g text-neutral-900 placeholder-neutral-600",
  focusClasses:
    "border-solid border-transparent focus:outline-none focus:border-turquoise-300 focus:bg-neutral-000",

  skeletonClasses: "w-2/6",
  paddingClasses: "px-4 py-3.25",
  makeErrorClasses: (error?: string) =>
    error ? "border-solid border border-red-200" : "",
  wrapperClasses: {
    baseContainer:
      "flex flex-col w-full border border-neutral-200 border-b-0 last:border-b first:rounded-t-lg last:rounded-b-lg py-4 px-3",
    error: "mt-2 text-style-h text-red-200",
    label: "hidden",
    helperText: "whitespace-nowrap text-style-h text-neutral-500",
  },
};

const POPOVER_SELECT_THEME = {
  fieldWrapper: "Simple" as FieldWrapperType,
  baseClasses:
    "rounded-lg text-style-g flex w-full text-neutral-900 placeholder-neutral-400 mb-1 caret-turquoise-300 text-left",
  focusClasses: "focus:outline-none",
  paddingClasses: "py-3.25",
  skeletonClasses: "w-2/6",
  makeErrorClasses: (error?: string) =>
    error ? "ring-1 ring-red-200 px-2" : "",
};

enum Variants {
  DEFAULT = "default",
  DEFAULT_WHITE = "default-white",
  CLEAN = "clean",
  NARROW = "narrow",
  NARROW_UNFOCUS = "narrow-unfocus",
  EMPHASIZED = "emphasized",
  LARGE = "large",
  MEDIUM = "medium",
  INLINE = "inline",
  OUTLINE_NARROW = "outline-narrow",
  FILLED = "filled",
  CUSTOMER_CHECKOUT = "customer-checkout",
  GROUP_DEFAULT = "group-default",
  POPOVER_SELECT = "popover-clean",
}

export const VARIANTS: StringIndexedObject<string> = {
  DEFAULT: Variants.DEFAULT,
  DEFAULT_WHITE: Variants.DEFAULT_WHITE,
  CLEAN: Variants.CLEAN,
  NARROW: Variants.NARROW,
  NARROW_UNFOCUS: Variants.NARROW_UNFOCUS,
  EMPHASIZED: Variants.EMPHASIZED,
  LARGE: Variants.LARGE,
  MEDIUM: Variants.MEDIUM,
  INLINE: Variants.INLINE,
  OUTLINE_NARROW: Variants.OUTLINE_NARROW,
  FILLED: Variants.FILLED,
  CUSTOMER_CHECKOUT: Variants.CUSTOMER_CHECKOUT,
  GROUP_DEFAULT: Variants.GROUP_DEFAULT,
  POPOVER_SELECT: Variants.POPOVER_SELECT,
};

export const FORM_THEME_VARIANTS: StringIndexedObject<Theme> = {
  [VARIANTS.DEFAULT]: DEFAULT_THEME,
  [VARIANTS.DEFAULT_WHITE]: DEFAULT_WHITE_THEME,
  [VARIANTS.CLEAN]: CLEAN_THEME,
  [VARIANTS.NARROW]: NARROW_THEME,
  [VARIANTS.NARROW_UNFOCUS]: NARROW_UNFOCUS_THEME,
  [VARIANTS.EMPHASIZED]: EMPHASIZED_THEME,
  [VARIANTS.LARGE]: LARGE_THEME,
  [VARIANTS.MEDIUM]: MEDIUM_THEME,
  [VARIANTS.INLINE]: INLINE_THEME,
  [VARIANTS.FILLED]: FILLED_THEME,
  [VARIANTS.OUTLINE_NARROW]: OUTLINE_NARROW_THEME,
  [VARIANTS.CUSTOMER_CHECKOUT]: CUSTOMER_CHECKOUT_THEME,
  [VARIANTS.GROUP_DEFAULT]: GROUP_DEFAULT_THEME,
  [VARIANTS.POPOVER_SELECT]: POPOVER_SELECT_THEME,
};