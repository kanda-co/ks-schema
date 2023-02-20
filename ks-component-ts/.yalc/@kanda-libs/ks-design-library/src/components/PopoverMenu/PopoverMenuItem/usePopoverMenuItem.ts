import { CLASS_NAMES, VARIANTS } from './constants';
import { useClasses } from '~/hooks';
import type { StringIndexedObject } from '~/types';
import type { PopoverMenuItemSize } from '~/components/PopoverMenu/types';
import type { IconProps } from '~/components/Icon/types';

export interface PopoverMenuHook {
  classNames: StringIndexedObject<string>;
  iconProps: IconProps;
  arrowIconProps: IconProps;
  seperator?: boolean;
}

export default function usePopoverMenu(
  size: PopoverMenuItemSize,
  selected: boolean,
): PopoverMenuHook {
  const classNames = useClasses(CLASS_NAMES, {
    variants: {
      size,
      selected,
    },
  });

  const { iconProps, arrowIconProps } = VARIANTS[size];

  return {
    classNames,
    iconProps,
    arrowIconProps,
  };
}
