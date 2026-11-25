export const CLASS_NAMES = {
  borderClassName:
    "absolute top-0 right-0 w-px h-full ml-auto mr-2 touch-action-none bg-neutral-200",
  resizer: {
    base: "absolute top-0 right-2 w-0.5 h-full touch-action-none z-10 hover:bg-purple-200",
    resizing: "bg-purple-200",
    static: "",
  },
  container: {
    base: "absolute top-0 -right-2 w-10 h-full cursor-pointer z-10",
    resizing: "opacity-100",
    static: "opacity-0 hover:opacity-100",
  },
};
