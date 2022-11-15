import type { CSSProperties } from 'react';
import clsx from 'clsx';
import { STYLE, CLASS_NAMES } from './constants';

export interface HeaderButtonWrapperPropsHook {
  classNames: {
    container: string;
    flex: string;
  };
  containerStyle: CSSProperties;
}

export default function useHeaderButtonWrapperProps(
  index: number,
): HeaderButtonWrapperPropsHook {
  const containerStyle = index === 0 ? STYLE : {};

  const classNames = {
    container: clsx(
      CLASS_NAMES.container.base,
      index === 0 ? CLASS_NAMES.container.padding : '',
    ),
    flex: clsx(
      CLASS_NAMES.flex.base,
      index === 0 ? '' : CLASS_NAMES.flex.padding,
    ),
  };

  return {
    classNames,
    containerStyle,
  };
}
