import clsx from 'clsx';
import {
  CLASS_NAMES,
  BUTTON_VARIANTS,
  BUTTON_SIZES_VARIANTS,
} from './constants';
import type { StringIndexedObject, Variant } from '~/types';
import type { IconProps } from '~/components/Icon/types';

export interface ButtonLinkHook {
  classNames: StringIndexedObject<string>;
  iconProps: IconProps;
}

export default function useButtonLink(
  variant: string,
  left: boolean,
  size: number,
  initialClassName: string,
  initialIconProps: IconProps,
  initialIconSpacing: Variant,
  isLoading: boolean,
): ButtonLinkHook {
  const { buttonBase, contentBase, ...classNames } = CLASS_NAMES;

  const colorVariant = BUTTON_VARIANTS[variant] || {};
  const sizeVariant = BUTTON_SIZES_VARIANTS[size] || {};

  const button = clsx(
    buttonBase,
    colorVariant.className,
    sizeVariant.className,
    initialClassName,
    isLoading && 'pointer-events-none',
  );

  const content = clsx(contentBase, left ? 'flex-row-reverse' : 'flex-row');

  const iconSpace = initialIconSpacing || sizeVariant.iconSpacing;

  const iconClassName = clsx(
    left ? `mr-${iconSpace}` : `ml-${iconSpace}`,
    initialIconProps.className,
  );

  const iconProps = {
    ...(sizeVariant.iconProps as unknown as IconProps),
    ...initialIconProps,
    className: iconClassName,
  };

  return {
    classNames: {
      ...classNames,
      button,
      content,
    },
    iconProps,
  };
}
