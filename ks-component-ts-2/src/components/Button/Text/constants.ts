const BUTTON_CLASS_NAME = {
  base: "relative transition-all duration-100 ease-in-out {{@className}}",
  "@variant": {
    solid:
      "bg-turquoise-300 text-neutral-000 rounded-full disabled:bg-neutral-300 disabled:text-neutral-000 hover:bg-turquoise-400",
    gradient:
      "bg-gradient-b-big text-neutral-900 rounded-full disabled:bg-neutral-300 disabled:text-neutral-000 disabled:bg-none bg-200 bg-left hover:bg-right duration-300",
    outline:
      "bg-neutral-000 ring-2 ring-neutral-200 text-neutral-600 rounded-full disabled:ring-neutral-100 disabled:text-neutral-400 hover:ring-neutral-300 hover:text-neutral-700",
    ghost: "text-neutral-500 disabled:text-neutral-400 hover:text-neutral-600",
  },
  "@size": {
    48: "px-8 h-12 text-style-f-em",
    40: "px-4 h-10 text-style-g-em",
    32: "px-4 h-8 text-style-h-em",
    24: "px-3 h-6 text-style-h-em",
  },
  "@loading": {
    true: "pointer-events-none",
  },
};

const CONTAINER_CLASS_NAME =
  "flex flex-1 items-center justify-items-center justify-center";

const CONTENT_CLASS_NAME = {
  base: "flex flex-1 items-center justify-items-center justify-center",
  "@left": {
    true: "flex-row-reverse",
    false: "flex-row",
  },
};

const ICON_SPACE_CLASS_NAME = {
  "@size": {
    48: "w-3",
    40: "w-2",
    32: "w-2",
    24: "w-1",
  },
};

const ICON_PROPS = {
  "@size": {
    48: {
      size: 20,
    },
    40: {
      size: 20,
    },
    32: {
      size: 20,
    },
    24: {
      size: 12,
    },
  },
};

const SKELETON_PROPS = {
  wrapperClassName: "absolute w-full h-full top-0 left-0",
  className: "leading-unset",
  height: "100%",
};

export default {
  classNames: {
    button: BUTTON_CLASS_NAME,
    container: CONTAINER_CLASS_NAME,
    content: CONTENT_CLASS_NAME,
    iconSpace: ICON_SPACE_CLASS_NAME,
  },
  props: {
    skeleton: SKELETON_PROPS,
    icon: ICON_PROPS,
  },
};
