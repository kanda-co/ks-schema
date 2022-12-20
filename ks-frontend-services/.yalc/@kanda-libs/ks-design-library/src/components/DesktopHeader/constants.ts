import type {
  ButtonIconSize,
  ButtonIconVariant,
} from '~/components/Button/ButtonIcon/types';

export const CLASS_NAMES = {
  container:
    'flex flex-1 flex-row h-10 items-center justify-between -mx-3 relative',
  logo: 'ml-3',
  mobileMenu: 'lg:hidden',
  optionsWrapper: 'flex flex-row items-center z-40',
  options: 'flex flex-row items-center',
  homeLink: 'z-10',
};

export const MENU_MODAL_ID = 'menu';

export const MENU_BUTTON_PROPS = {
  id: 'desktop-header-menu',
  size: '40-20' as ButtonIconSize,
  variant: 'ghost-grey' as ButtonIconVariant,
  key: 'menu',
  icon: 'menu',
};
