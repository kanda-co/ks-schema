import { CLASS_NAMES } from './constants';
import clsx from 'clsx';

export interface HeaderBaseClassNamesHook {
  container: string;
  content: string;
  options: string;
}

export default function useHeaderBaseClassNames(
  initialClassName: string,
): HeaderBaseClassNamesHook {
  const { containerBase, ...restClassNames } = CLASS_NAMES;

  const container = clsx(containerBase, initialClassName);

  return {
    ...restClassNames,
    container,
  };
}
