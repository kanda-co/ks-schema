export const CLASS_NAMES = {
  container: "flex flex-row justify-between w-full px-3 py-2 rounded",
  text: "text-style-g",
  checkbox: {
    container: "flex flex-row",
    margin: "my-auto mr-3",
  },
  dragHandle: "flex flex-row w-5 h-5",
};

export const DRAGGING_PROPS = {
  color: {
    dragging: "turquoise-300",
    static: "neutral-500",
  },
  background: {
    dragging: "bg-turquoise-100",
    static: "bg-neutral-000",
  },
};

export const HANDLE_ICON_PROPS = {
  icon: "menu",
  size: 16,
  className: "my-auto ml-auto",
};
