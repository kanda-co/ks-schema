import { useClasses } from '@kanda-libs/ks-design-library';
import { CLASS_NAMES } from './constants';

export interface RowClassNamesHook {
  base: string;
  compact: string;
  border: string;
  hover: string;
  button: string;
}

export default function useRowClassNames(index: number): RowClassNamesHook {
  const classNames = useClasses(CLASS_NAMES, {
    base: ['.base', index === 9 ? '' : '.border', '.hover'],
    button: ['.button'],
  });

  return classNames as RowClassNamesHook;
}
