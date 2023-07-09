import type { SkeletonLoaderProps } from "@kanda-libs/ks-design-library";

export const CLASS_NAMES = {
  title: "mb-6 block text-neutral-700 text-sm",
  wrapper: {
    base: "p-4 border border-solid border-neutral-300 rounded-xl md:min-w-96 min-h-30 cursor-pointer",
    muted:
      "p-4 bg-neutral-100 rounded-xl md:min-w-96 min-h-30 cursor-pointer flex flex-col items-stretch justify-stretch",
  },
  price: {
    base: "text-16-20-em",
    muted: "text-neutral-600 text-16-20-em",
  },
  innerWrapper: "flex flex-col md:flex-row items-start justify-center",
  credit:
    "py-4 flex flex-col items-start justify-start h-full pr-4 mr-4 uppercase md:border-r border-solid border-neutral-300 h-full pb-2 md:pb-0",
  terms: "flex flex-row items-center justify-center flex-grow",
  termsInnerWrapper: "grid grid-cols-2 gap-x-1 gap-y-1 flex-grow",
  termsValues: "flex flex-row items-center gap-x-2",
  termsLoading:
    "w-full text-left flex flex-col items-start justify-start h-full",
  termsLabel: "text-10-17-em-up block uppercase text-neutral-600",
  termsValue: "text-16-20-em text-neutral-600",
  termsItem: "text-left",
  checkbox: "ml-6",
};

export const TERMS_PRICE_PROPS = {
  poundsClassName: CLASS_NAMES.termsValue,
  centsClassName: CLASS_NAMES.termsValue,
};

export const SKELETON_PROPS: Partial<SkeletonLoaderProps> = {
  width: 100,
  height: 20,
  isLoading: true,
};
