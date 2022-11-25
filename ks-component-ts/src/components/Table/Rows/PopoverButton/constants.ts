import type {
  ButtonIconSize,
  ButtonIconVariant
} from "@kanda-libs/ks-design-library";

export const CLASS_NAMES = {
  stickyContainer: "sticky h-full right-0 hidden group-hover:block z-50",
  relativeContainer: "relative h-full",
  absoluteContainer: "absolute flex flex-row h-full right-0",
  fadeLeft: "w-2 bg-gradient-to-r from-transparent to-neutral-50",
  button: "flex bg-neutral-50 pr-1",
  wrapper: "my-auto",
};

export const BUTTON_PROPS = {
  variant: "ghost-grey" as ButtonIconVariant,
  size: "32-20" as ButtonIconSize,
  icon: "more",
  className: "my-auto hover:bg-neutral-200",
};
