import type { ButtonIconVariant } from "@kanda-libs/ks-design-library";

export const CLASS_NAMES = {
  container: "flex flex-row w-full items-center justify-center mb-4",
};

export const BUTTONS = {
  rotateCounterClockwise: {
    variant: "custom" as ButtonIconVariant,
    icon: "rotate",
    className: "mr-2 transform -scale-x-1",
  },
  rotateClockwise: {
    variant: "custom" as ButtonIconVariant,
    icon: "rotate",
    className: "ml-2",
  },
};
