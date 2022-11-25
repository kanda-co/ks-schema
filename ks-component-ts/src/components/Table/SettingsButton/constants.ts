import type {ButtonIconSize, ButtonIconVariant} from "@kanda-libs/ks-design-library";

export const CLASS_NAMES = {
  container: "flex h-14 pb-px absolute top-0 right-2 z-30",
  fadeLeft: "w-6 bg-gradient-to-r from-transparent to-neutral-000",
  button: "flex bg-neutral-000",
  wrapper: "my-auto",
  fadeRight: "w-6 bg-gradient-to-l from-transparent to-neutral-000",
};

export const BUTTON_PROPS = {
  variant: "ghost-grey" as ButtonIconVariant,
  size: "40-20" as ButtonIconSize,
  icon: "settings",
};
