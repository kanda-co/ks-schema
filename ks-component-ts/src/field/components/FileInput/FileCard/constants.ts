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
    button:
      "bg-neutral-500 ml-4 rounded-full w-5 h-5 flex justify-center items-center",
    progress:
      "absolute bg-turquoise-300 h-full opacity-10 z-0 transition-width transition-slowest ease",
  },
  small: {
    container:
      "w-full flex flex-1 items-center text-style-g p-3 space-between items-center z-10",
    image: "object-contain w-16 max-h-16",
    button:
      "bg-neutral-500 ml-4 rounded-full w-4 h-4 flex justify-center items-center",
    progress:
      "absolute bg-turquoise-300 h-full opacity-10 z-0 transition-width transition-slowest ease",
  },
};

export const ICONS = {
  default: {
    document: {
      icon: "file",
      stroke: "turquoise-300",
      size: 24,
      className: "mr-4 min-w-6",
    },
    progress: {
      icon: "load",
      stroke: "neutral-500",
      size: 20,
      className: "animate-spin ml-2",
    },
    delete: {
      icon: "close",
      stroke: "neutral-000",
      width: 12,
      height: 12,
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
      className: "animate-spin ml-2",
    },
    delete: {
      icon: "close",
      stroke: "neutral-000",
      width: 10,
      height: 10,
    },
  },
};
