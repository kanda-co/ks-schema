import clsx from 'clsx';
import { CLASS_NAMES, ICONS, ICON_PROPS } from './constants';
import type { IconProps } from '~/components/Icon/types';

export interface PaginationNavButtonPropsHook {
  className: string;
  iconProps: IconProps;
}

export default function usePaginationNavButtonProps(
  disabled: boolean,
  next: boolean,
): PaginationNavButtonPropsHook {
  const className = clsx(
    CLASS_NAMES.base,
    disabled ? CLASS_NAMES.opacity : '',
    next ? CLASS_NAMES.margin.left : CLASS_NAMES.margin.right,
  );

  const iconProps = {
    ...ICON_PROPS,
    icon: next ? ICONS.next : ICONS.prev,
  };

  return {
    className,
    iconProps,
  };
}
