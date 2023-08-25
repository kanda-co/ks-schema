export const BG_COLOR =
  "linear-gradient(to right, transparent 10px, #1cb69c 10px, #1cb69c $PCT%, #e0e7f0 $PCT%, #e0e7f0 calc(100% - 10px), transparent calc(100% - 10px))";

export const CLASS_NAMES = {
  container: "flex flex-col w-full",
  skeletonWrapper: "flex w-full",
  skeletonContainer: "w-full",
  labels: "flex flex-row justify-between first:mb-1 last:mt-1",
  upperLabel: "text-10-17-em-up text-green-600",
  lowerLabel:
    "text-12-18-em text-green-600 first:text-neutral-500 last:text-neutral-500 w-20 min-w-20 text-center first:text-left last:text-right",
  highlightedLowerLabel:
    "text-12-18-em text-green-600 first:text-orange-200 last:text-orange-200 w-20 min-w-20 text-center first:text-left last:text-right",
  rangeWrapper: "flex flex-row relative",
  cap: "w-2.5 h-2.5 bg-green-600 rounded-full border border-neutral-000 absolute z-0 top-[5px] first:left-0 last:right-0",
};
