import clsx from 'clsx';
import {
  TAG_BASE_CLASSES,
  TAG_VARIANTS,
  TAG_COLOURS,
  TAG_SIZES,
} from './constants';
import type { TagProps } from './types';

type TagClassNameHookArgs = Omit<TagProps, 'label' | 'children'>;

export default function useTagClassName({
  color,
  variant,
  size,
  className: initialClassName,
}: TagClassNameHookArgs): string {
  const variantClassName = TAG_VARIANTS[variant as string];
  const colours = TAG_COLOURS[color as string];
  const sizeClassName = TAG_SIZES[size as number];

  const className = clsx(
    TAG_BASE_CLASSES,
    variantClassName,
    sizeClassName,
    colours,
    initialClassName,
  );

  return className;
}
