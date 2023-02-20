import type {
  ButtonIconSize,
  ButtonIconVariant,
} from '~/components/Button/ButtonIcon/types';

export const CLASSNAMES = {
  base: 'fixed right-4 bottom-4',
  show: 'block',
  hide: 'hidden',
};

export const BUTTON_PROPS = {
  variant: 'solid-grey' as ButtonIconVariant,
  size: '40-20' as ButtonIconSize,
  icon: 'arrow-up',
};

export const MIN_SCROLL_HEIGHT = 120;

export const TIMEOUT = 100;
