import type {
  ButtonIconSize,
  ButtonIconVariant,
} from "@kanda-libs/ks-design-library/src/components/Button/ButtonIcon/types";

export const CLASS_NAMES = {
  container: "flex flex-1 flex-row justify-between",
};

export const DEFAULT_NEXT_BUTTON_PROPS = {
  variant: "solid" as ButtonIconVariant,
  size: 48 as ButtonIconSize,
  label: "Next",
  icon: "arrow-right",
};

export const DEFAULT_PREV_BUTTON_PROPS = {
  variant: "solid-grey" as ButtonIconVariant,
  size: "48-20" as ButtonIconSize,
  icon: "arrow-left",
};
