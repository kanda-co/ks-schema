import type { FunctionComponent } from 'react';
import clsx from 'clsx';
import type { IconProps } from '~/components/Icon/types';
import { getStrokeClassName } from '~/components/Icon/helpers';
import type { StringIndexedObject } from '~/types';
import { CLASS_NAMES, DEFAULT_SIZE, ICONS } from './constants';

export interface Hook {
  Icon: FunctionComponent<IconProps>;
  classNames: StringIndexedObject<string>;
  width: number;
  height: number;
  style?: StringIndexedObject<unknown>;
}

export default function useIcon({
  icon,
  stroke,
  flip,
  width: initialWidth,
  height: initialHeight,
  className: initialClassName,
  size,
  fill,
}: Omit<IconProps, 'isLoading'>): Hook {
  const { Icon, ...defaultProps } = ICONS[icon as string] || {
    Icon: () => null,
  };

  const { skeletonBase, ...restClassNames } = CLASS_NAMES;

  const strokeClassName = stroke ? `stroke-current text-${stroke}` : '';

  const rotateClassName =
    flip || defaultProps.flip ? 'transform rotate-180' : '';

  const fillClassName = fill ? `fill-${fill}` : '';

  const sizeClass = getStrokeClassName(size);

  const svg = clsx(
    strokeClassName,
    rotateClassName,
    fillClassName,
    initialClassName,
    !initialClassName?.includes('icon-stroke') && sizeClass,
  );

  const classNames = { ...restClassNames, svg, skeleton: skeletonBase };

  const width = initialWidth || size || DEFAULT_SIZE.width;

  const height = initialHeight || size || DEFAULT_SIZE.height;

  return {
    Icon: Icon as FunctionComponent<IconProps>,
    classNames,
    width,
    height,
    style: strokeClassName ? {} : undefined,
  };
}
