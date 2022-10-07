export const CLASS_NAMES = {
  default: {
    container:
      "relative inline-block w-11 h-6 align-middle select-none mb-auto",
    checkBox:
      "absolute block w-4.5 h-4.5 rounded-full bg-neutral-000 m-0.75 appearance-none cursor-pointer left-0 transform-gpu checked:translate-x-5 transition-transform duration-100 ease-in disabled:bg-neutral-400",
    label:
      "toggle-label block overflow-hidden h-6 rounded-full bg-neutral-200 cursor-pointer label-checked:bg-turquoise-300 transition-colors duration-100 ease-in label-checked-disabled:bg-neutral-300",
    skeleton: "-mt-1 mr-2",
  },
  small: {
    container: "relative inline-block w-9 h-5 align-middle select-none",
    checkBox:
      "absolute block w-3.5 h-3.5 rounded-full bg-neutral-000 m-0.75 appearance-none cursor-pointer left-0 transform-gpu checked:translate-x-4 transition-transform duration-100 ease-in disabled:bg-neutral-400",
    label:
      "toggle-label block overflow-hidden h-5 rounded-full bg-neutral-200 cursor-pointer label-checked:bg-turquoise-300 transition-colors duration-100 ease-in label-checked-disabled:bg-neutral-300",
    skeleton: "-mt-1 mr-2",
  },
};

export const SKELETONS = {
  default: {
    width: 44,
    height: 24,
    wrapperClassName: "absolute -top-1",
    className: "!rounded-full",
  },
  small: {
    width: 36,
    height: 20,
    wrapperClassName: "absolute -top-1",
    className: "!rounded-full",
  },
};
