import clsx from 'clsx';
import { CLASS_NAMES } from './constants';

export interface HeaderColumnPropsHook {
  classNames: {
    main: string;
    loading: string;
    wrapper: string;
  };
}

export default function useHeaderColumnProps(
  index: number,
  popoverButtons: boolean,
): HeaderColumnPropsHook {
  const classNames = {
    ...CLASS_NAMES,
    loading: clsx(
      CLASS_NAMES.loading.base,
      index === 0 ? '' : CLASS_NAMES.loading.margin,
    ),
    wrapper: clsx(
      CLASS_NAMES.wrapper.padding,
      popoverButtons ? '' : CLASS_NAMES.wrapper.popover,
    ),
  };

  return {
    classNames,
  };
}
