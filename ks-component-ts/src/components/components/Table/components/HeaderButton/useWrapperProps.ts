import type { CSSProperties } from 'react';
import clsx from 'clsx';
import { WRAPPER_STYLE, WRAPPER_CLASS_NAMES } from './constants';

export interface WrapperPropsHook {
  classNames: {
    container: string;
    flex: string;
  };
  containerStyle: CSSProperties;
}

export default function useWrapperProps(index: number): WrapperPropsHook {
  const containerStyle = index === 0 ? WRAPPER_STYLE : {};

  const classNames = {
    container: clsx(
      WRAPPER_CLASS_NAMES.container.base,
      index === 0 ? WRAPPER_CLASS_NAMES.container.padding : '',
    ),
    flex: clsx(
      WRAPPER_CLASS_NAMES.flex.base,
      index === 0 ? '' : WRAPPER_CLASS_NAMES.flex.padding,
    ),
  };

  return {
    classNames,
    containerStyle,
  };
}
