export const SKELETONS = {
  icon: {
    width: 24,
    height: 24,
    wrapperClassName: "w-6 -mt-1 mr-4",
  },
  input: {
    wrapperClassName: "hidden",
  },
};

export const CLASS_NAMES = {
  default: {
    container:
      "w-full flex flex-1 items-center text-style-f p-6 space-between items-center z-10",
    image: "object-contain w-32 max-h-32",
    button: "w-5 h-5 flex justify-center items-center ml-5",
    progress:
      "absolute bg-turquoise-300 h-full opacity-10 z-0 transition-width transition-slowest ease",
    bottom:
      "relative border border-t-0 rounded-b-xl border-neutral-200 bg-neutral-000 h-12 overflow-hidden",
    padding: "flex flex-row justify-between px-3 py-2.5",
  },
  small: {
    container:
      "w-full flex flex-1 items-center text-style-g p-3 space-between items-center z-10",
    image: "object-contain w-16 max-h-16",
    button: "w-4 h-4 flex justify-center items-center ml-4",
    progress:
      "absolute bg-turquoise-300 h-full opacity-10 z-0 transition-width transition-slowest ease",
    bottom:
      "relative border border-t-0 rounded-b-xl border-neutral-200 bg-neutral-000 h-12 overflow-hidden",
    padding: "flex flex-row justify-between px-3 py-2.5",
  },
};

export const ICONS = {
  default: {
    document: {
      icon: "file",
      stroke: "turquoise-300",
      size: 24,
      className: "mr-4",
    },
    progress: {
      icon: "load",
      stroke: "neutral-500",
      size: 20,
      className: "animate-spin ml-2 my-auto",
    },
    delete: {
      icon: "remove",
      stroke: "neutral-600",
      size: 28,
    },
  },
  small: {
    document: {
      icon: "file",
      stroke: "turquoise-300",
      size: 20,
      className: "mr-3",
    },
    progress: {
      icon: "load",
      stroke: "neutral-500",
      size: 16,
      className: "animate-spin ml-2 my-auto",
    },
    delete: {
      icon: "remove",
      stroke: "neutral-600",
      size: 28,
    },
  },
};
