import type { StringIndexedObject, Variants } from 'types';
import { createGetters, formatObject } from './helpers';
import type { HTMLAttributes } from 'react';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';
import type { IconProps } from '~/components/Icon/types';

export interface Options {
  helpers: object;
  variants: Variants;
  classNames: StringIndexedObject;
}

interface PropsGetters {
  getButtonProps: (
    args: StringIndexedObject,
  ) => HTMLAttributes<HTMLButtonElement>;
  getIconProps: (args: StringIndexedObject) => IconProps;
  getSkeletonProps: (args: SkeletonLoaderProps) => IconProps;
}

export interface PropsHook extends PropsGetters {
  classNames: StringIndexedObject;
}

export default function useProps(props: object, options: Options): PropsHook {
  const { helpers, variants, classNames } = options;

  const formattedProps = formatObject(props, variants);

  const getters = createGetters(
    formattedProps,
    classNames,
    helpers,
  ) as unknown as PropsGetters;

  return {
    classNames,
    ...getters,
  };
}
