import clsx from 'clsx';
import type { StringIndexedObject } from '~/types';
import type {
  ButtonIconSize,
  ButtonIconVariant,
} from '~/components/Button/ButtonIcon/types';
import {
  BUTTON_ICON_SIZE_VARIANTS,
  BUTTON_ICON_VARIANTS,
  CLASS_NAMES,
} from './constants';
import type { IconProps } from '~/components/Icon/types';

export interface ButtonIconHook {
  iconProps: IconProps;
  classNames: StringIndexedObject<string>;
  circle: boolean;
  style: {
    width: number;
    height: number;
  };
  type: string;
}

export default function useButtonIcon(
  submit: boolean,
  variant: ButtonIconVariant,
  size: ButtonIconSize,
  initialIconProps: IconProps,
  initialClassName: string,
  indicatorColor: string,
  indicatorPosition: string,
): ButtonIconHook {
  const { size: variantSize, iconProps: sizeIconProps } =
    BUTTON_ICON_SIZE_VARIANTS[size] || {};

  const { buttonBase, skeletonBase, indicatorBase, ...restClassNames } =
    CLASS_NAMES;

  const { circle, ...iconVariant } = BUTTON_ICON_VARIANTS[variant] || {};

  const button = clsx(
    buttonBase,
    iconVariant.className,
    circle && 'rounded-full',
    initialClassName,
  );

  const indicator = clsx(
    indicatorBase,
    iconVariant.indicator,
    `bg-${indicatorColor}`,
    indicatorPosition,
  );

  const skeleton = clsx(skeletonBase, initialClassName);

  const classNames = {
    ...restClassNames,
    skeleton,
    button,
    indicator,
  };

  const style = {
    width: variantSize || size,
    height: variantSize || size,
  };

  const iconProps = {
    ...(sizeIconProps as unknown as IconProps),
    ...(iconVariant.iconProps as unknown as IconProps),
    ...initialIconProps,
  };

  const type = submit ? 'submit' : 'button';

  return {
    iconProps,
    classNames,
    circle: circle as boolean,
    style: style as { width: number; height: number },
    type,
  };
}
