export const VARIANTS = {
  default: {
    span: "ml-3 select-none w-full text-style-f my-auto",
    skeletonWrapper: "mx-2 w-full",
    handleContainer: "my-auto",
    selected: {
      option: "overflow-hidden border border-turquoise-300 cursor-pointer",
      container: "bg-neutral-000 flex flex-full w-full p-4 text-neutral-800",
    },
    notSelected: {
      option: "overflow-hidden border border-neutral-300 cursor-pointer",
      container: "bg-neutral-000 flex flex-full w-full p-4 text-neutral-600",
    },
    multiline: {
      option: "flex flex-1 rounded-xl mt-2 last:mb-2",
    },
    inline: {
      option: "mr-2 flex flex-1 last:mr-0 rounded-lg",
    },
  },
  small: {
    span: "ml-3 select-none w-full text-14-22 my-auto",
    skeletonWrapper: "mx-2 w-full",
    handleContainer: "my-auto",
    selected: {
      option: "overflow-hidden border border-turquoise-300 cursor-pointer",
      container:
        "bg-neutral-000 flex flex-full w-full px-4 py-3.5 text-neutral-800",
    },
    notSelected: {
      option: "overflow-hidden border border-neutral-300 cursor-pointer",
      container:
        "bg-neutral-000 flex flex-full w-full px-4 py-3.5 text-neutral-600",
    },
    multiline: {
      option: "flex flex-1 rounded-xl mt-2 last:mb-2",
    },
    inline: {
      option: "mr-2 flex flex-1 last:mr-0 rounded-lg",
    },
  },
  clean: {
    span: "ml-3 select-none w-full text-style-f-em my-auto",
    skeletonWrapper: "mx-2 w-full",
    handleContainer: "my-auto",
    selected: {
      option:
        "overflow-hidden border-b border-neutral-100 cursor-pointer last:border-0",
      container: "bg-neutral-000 flex flex-full w-full p-4 text-neutral-700",
    },
    notSelected: {
      option:
        "overflow-hidden border-b border-neutral-100 cursor-pointer last:border-0",
      container: "bg-neutral-000 flex flex-full w-full p-4 text-neutral-700",
    },
    multiline: {
      option: "flex flex-1 rounded-xl mt-2 last:mb-2",
    },
    inline: {
      option: "mr-2 flex flex-1 last:mr-0 rounded-lg",
    },
  },
  "text-only": {
    span: "flex text-left select-none w-full text-style-g-em my-auto mr-4",
    skeletonWrapper: "flex-row w-full",
    handleContainer: "hidden",
    selected: {
      option: "border-neutral-000 overflow-hidden cursor-pointer",
      container:
        "bg-neutral-000 flex flex-full w-full py-2 text-turquoise-300 font-bold",
    },
    notSelected: {
      option: "border-neutral-000 overflow-hidden cursor-pointer",
      container: "bg-neutral-000 flex flex-full w-full py-2 text-neutral-600",
    },
    multiline: {
      option: "flex flex-1 rounded-xl mt-2 last:mb-2",
    },
    inline: {
      option: "mr-2 flex flex-1 last:mr-0 rounded-lg",
    },
  },
  popover: {
    span: "flex text-left select-none w-full text-style-g-em my-auto mr-4",
    skeletonWrapper: "flex-row w-full",
    handleContainer: "hidden",
    selected: {
      option: "border-neutral-000 overflow-hidden cursor-pointer",
      container:
        "bg-neutral-000 flex flex-full w-full text-turquoise-300 font-bold",
    },
    notSelected: {
      option: "border-neutral-000 overflow-hidden cursor-pointer",
      container: "bg-neutral-000 flex flex-full w-full text-neutral-600",
    },
    multiline: {
      option: "flex flex-1 rounded-xl mt-2 last:mb-2",
    },
    inline: {
      option: "mr-2 flex flex-1 last:mr-0",
    },
  },
  "popover-clean": {
    span: "flex text-left select-none w-full text-12-18 my-auto mr-4",
    skeletonWrapper: "flex-row w-full",
    handleContainer: "hidden",
    selected: {
      option: "border-neutral-000 overflow-hidden cursor-pointer",
      container:
        "bg-neutral-000 px-3 py-2.25 flex flex-full w-full text-turquoise-300 font-bold rounded hover:bg-neutral-100",
    },
    notSelected: {
      option: "border-neutral-000 overflow-hidden cursor-pointer",
      container:
        "bg-neutral-000 px-3 py-2.25 flex flex-full w-full text-neutral-900 rounded hover:bg-neutral-100",
    },
    multiline: {
      option: "flex flex-1 rounded-xl first:mt-2 last:mb-2",
    },
    inline: {
      option: "mr-2 flex flex-1 last:mr-0",
    },
  },
  narrow: {
    span: "select-none w-full text-style-h-em md:text-style-g-em my-auto text-center",
    skeletonWrapper: "mx-2 w-full",
    handleContainer: "hidden",
    selected: {
      option:
        "overflow-hidden border border-turquoise-300 cursor-pointer bg-turquoise-100 -ml-px first:ml-0",
      container:
        "bg-turquoise-100 flex flex-full w-full p-1.5 text-turquoise-300",
    },
    notSelected: {
      option:
        "overflow-hidden border border-neutral-300 cursor-pointer border-l-0 first:border-l",
      container:
        "bg-neutral-000 flex flex-full w-full p-1.5 text-neutral-600 hover:text-turquoise-300",
    },
    multiline: {
      option: "flex flex-1",
    },
    inline: {
      option: "flex flex-1 last:mr-0 first:rounded-l-lg last:rounded-r-lg",
    },
  },
  "narrow-lg": {
    span: "select-none w-full text-style-g-em my-auto text-center",
    skeletonWrapper: "mx-2 w-full",
    handleContainer: "hidden",
    selected: {
      option:
        "overflow-hidden border border-turquoise-300 cursor-pointer bg-turquoise-100 -ml-px first:ml-0",
      container:
        "bg-turquoise-100 flex flex-full w-full p-2.5 text-turquoise-300",
    },
    notSelected: {
      option:
        "overflow-hidden border border-neutral-300 cursor-pointer border-l-0 first:border-l",
      container: "bg-neutral-000 flex flex-full w-full p-2.5 text-neutral-600",
    },
    multiline: {
      option: "flex flex-1",
    },
    inline: {
      option: "flex flex-1 last:mr-0 first:rounded-l-lg last:rounded-r-lg",
    },
  },
};

export const CLASS_NAMES_MULTIPLE = {
  span: "flex text-left flex-1 select-none text-style-g-em my-auto mr-4",
  skeletonWrapper: "flex-row w-full",
  selected: {
    option: "overflow-hidden border border-turquoise-300 cursor-pointer",
    container:
      "bg-turquoise-100 flex flex-full w-full p-4 text-turquoise-300 flex-row-reverse",
  },
  notSelected: {
    option: "overflow-hidden border border-neutral-300 cursor-pointer",
    container: "bg-neutral-000 flex flex-full w-full p-4 flex-row-reverse",
  },
  multiline: {
    option: "flex flex-1 rounded-xl mt-2 last:mb-2",
  },
  inline: {
    option: "mr-2 flex flex-1 last:mr-0 rounded-lg",
  },
};