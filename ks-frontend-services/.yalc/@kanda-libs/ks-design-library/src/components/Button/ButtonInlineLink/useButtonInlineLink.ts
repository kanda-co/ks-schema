import clsx from 'clsx';
import { CLASS_NAMES, BUTTON_VARIANTS } from './constants';
import type { StringIndexedObject } from '~/types';

export interface ButtonInlineLinkHook {
  classNames: StringIndexedObject<string>;
}

export default function useButtonInlineLink(
  variant: string,
  initialClassName: string,
  isLoading: boolean,
): ButtonInlineLinkHook {
  const { buttonBase, buttonLoading, buttonNotLoading, ...classNames } =
    CLASS_NAMES;

  const colorVariant = BUTTON_VARIANTS[variant] || {};

  const button = clsx(
    buttonBase,
    colorVariant.className,
    initialClassName,
    isLoading ? buttonLoading : buttonNotLoading,
  );

  return {
    classNames: {
      ...classNames,
      button,
    },
  };
}
