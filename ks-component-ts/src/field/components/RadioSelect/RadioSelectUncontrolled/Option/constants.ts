import { StringIndexedObject } from "~/types";

interface VariantProps {
  span: string;
  skeleton?: string;
  skeletonWrapper: string;
  handleContainer?: string;
  selected: {
    option: string;
    container: string;
    icon?: string;
  };
  notSelected: {
    option: string;
    container: string;
    icon?: string;
  };
  warning: {
    option: string;
    container: string;
    icon?: string;
  };
  warningNotSelected: {
    option: string;
    container: string;
    icon?: string;
  };
  disabled?: {
    option: string;
    container: string;
  };
  multiline: {
    option: string;
  };
  inline: {
    option: string;
  };
}

// TODO: Make variant specific
const warning = {
  option: "bg-orange-100 cursor-pointer",
  container:
    "rounded bg-orange-100 flex flex-full w-full px-4 py-2 text-orange-200 border border-orange-200",
  icon: "text-orange-200",
};

const warningNotSelected = {
  option: "bg-orange-100 border-orange-100 cursor-pointer",
  container:
    "rounded bg-orange-100 flex flex-full w-full px-4 py-2 text-orange-200 border border-orange-100",
  icon: "text-orange-200",
};

export const VARIANTS: StringIndexedObject<VariantProps> = {
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
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
    warning,
    warningNotSelected,
    multiline: {
      option: "flex flex-1",
    },
    inline: {
      option: "flex flex-1 last:mr-0 first:rounded-l-lg last:rounded-r-lg",
    },
  },
  streamline: {
    span: "select-none w-full text-14-22-em whitespace-nowrap my-auto text-center flex flex-row items-center justify-center gap-x-2",
    skeleton: "w-full",
    skeletonWrapper: "w-10 -mt-0.5",
    handleContainer: "hidden",
    selected: {
      option: "border border-turquoise-300 cursor-pointer bg-turquoise-100",
      container:
        "rounded bg-turquoise-100 flex flex-full w-full px-4 py-2 text-turquoise-300",
    },
    notSelected: {
      option: "border border-neutral-300 cursor-pointer",
      container:
        "rounded bg-neutral-000 flex flex-full w-full px-4 py-2 text-neutral-600",
    },
    warning,
    warningNotSelected,
    disabled: {
      option: "border border-neutral-300 cursor-not-allowed",
      container:
        "rounded bg-neutral-200 flex flex-full w-full px-4 py-2 text-neutral-600",
    },
    multiline: {
      option: "",
    },
    inline: {
      option: "rounded",
    },
  },
  "streamline-radio": {
    span: "select-none w-full text-16-18 md:text-13-14 whitespace-nowrap my-auto text-center",
    skeleton: "w-full",
    skeletonWrapper: "w-10 -mt-0.5",
    handleContainer: "my-auto mr-1.5",
    selected: {
      option: "border border-turquoise-300 cursor-pointer bg-turquoise-100",
      container:
        "rounded bg-turquoise-100 flex flex-full w-full px-2.5 py-2.25 md:py-1.5 text-neutral-900",
    },
    notSelected: {
      option: "border border-neutral-300 cursor-pointer",
      container:
        "rounded bg-neutral-000 flex flex-full w-full px-2.5 py-2.25 md:py-1.5 text-neutral-900",
    },
    warning,
    warningNotSelected,
    multiline: {
      option: "",
    },
    inline: {
      option: "rounded sibling:ml-2",
    },
  },
};

export const CLASS_NAMES_MULTIPLE: VariantProps = {
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
  warning,
  warningNotSelected,
  multiline: {
    option: "flex flex-1 rounded-xl mt-2 last:mb-2",
  },
  inline: {
    option: "mr-2 flex flex-1 last:mr-0 rounded-lg",
  },
};
