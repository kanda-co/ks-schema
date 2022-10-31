export const CLASS_NAMES = {
  container: {
    base: "flex flex-1 fixed top-0 left-0 w-screen h-screen bg-turquoise-200 z-50",
    "@isDragAccept": {
      false: "hidden",
    },
  },
  content:
    "flex flex-1 flex-col items-center justify-center md:mx-20 lg:mx-50 2xl:mx-80 my-50 border-2 bg-turquoise-300 bg-opacity-5 border-turquoise-300 border-dashed rounded-3xl",
  text: "text-style-c text-neutral-800 mt-6",
};

export const ICON_PROPS = {
  size: 40,
  stroke: "turquoise-400",
};
