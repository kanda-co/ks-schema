import React, { FunctionComponent, HTMLAttributes } from 'react';
import Icon from '~/components/Icon';
import usePopoverMenuItem from './usePopoverMenuItem';
import type { PopoverMenuItemSize } from '~/components/PopoverMenu/types';
import { useButtonTracking } from '~/hooks';

export interface PopoverMenuItemProps
  extends HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  name: string;
  icon: string;
  size?: PopoverMenuItemSize;
  arrow?: boolean;
  selected?: boolean;
  seperator?: boolean;
}

const PopoverMenuItem: FunctionComponent<PopoverMenuItemProps> = function ({
  name,
  icon,
  size = 'small',
  arrow = false,
  selected = false,
  onClick: inputOnClick,
  ...restProps
}) {
  const { classNames, iconProps, arrowIconProps } = usePopoverMenuItem(
    size,
    selected,
  );

  const id = `popover-menu-item-${name.toLowerCase().replace(/ /g, '-')}`;

  const { onClick } = useButtonTracking(id, inputOnClick);

  return (
    <button
      id={id}
      className={classNames.container}
      onClick={onClick}
      {...restProps}
    >
      <Icon icon={icon} {...iconProps} />
      <div className={classNames.name}>{name}</div>
      {arrow && <Icon {...arrowIconProps} />}
    </button>
  );
};

export default PopoverMenuItem;
