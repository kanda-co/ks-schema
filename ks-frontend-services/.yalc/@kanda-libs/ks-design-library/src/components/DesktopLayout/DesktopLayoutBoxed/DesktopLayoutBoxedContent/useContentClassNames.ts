import type { ContentDefaultProps } from './index';
import type { StringIndexedObject } from '~/types';
import { useClasses } from '~/hooks';
import { CLASS_NAMES } from './constants';

export type ContentClassNamesArgs = Omit<
  ContentDefaultProps,
  'children' | 'header'
>;

export default function useContentClassNames({
  footer,
  width,
  ...variants
}: ContentClassNamesArgs): StringIndexedObject {
  const classNames = useClasses(CLASS_NAMES, {
    variants,
    container: ['.container', footer ? '' : 'pb-18'],
    content: ['.content', width],
  });

  return classNames;
}
