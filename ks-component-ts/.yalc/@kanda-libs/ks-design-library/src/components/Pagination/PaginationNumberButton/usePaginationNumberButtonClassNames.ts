import clsx from 'clsx';
import { CLASS_NAMES } from './constants';
import type { StringIndexedObject } from '~/types';

export default function usePaginationNumberButtonClassNames(
  active: boolean,
  ellipsis: boolean,
): StringIndexedObject<string> {
  const classNames = {
    button: ellipsis
      ? clsx(CLASS_NAMES.base, CLASS_NAMES.normal, CLASS_NAMES.ellipsis)
      : clsx(
          CLASS_NAMES.base,
          active
            ? CLASS_NAMES.active
            : clsx(CLASS_NAMES.normal, CLASS_NAMES.hover),
        ),
    text: 'm-auto',
  };

  return classNames;
}
