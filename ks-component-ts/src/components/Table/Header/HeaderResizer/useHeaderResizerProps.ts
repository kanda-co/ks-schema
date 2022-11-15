import type { TableHeaderColumn } from '~/components/Table/types';
import clsx from 'clsx';
import { CLASS_NAMES } from './constants';
import type { HTMLAttributes } from 'react';

export interface HeaderResizerPropsHook {
  classNames: {
    resizer: string;
    container: string;
  };
  resizerProps: HTMLAttributes<HTMLDivElement>;
}

export default function useHeaderResizerProps(
  column: TableHeaderColumn,
): HeaderResizerPropsHook {
  const { isResizing, getResizerProps } = column;

  const classNames = {
    resizer: clsx(
      CLASS_NAMES.resizer.base,
      isResizing ? CLASS_NAMES.resizer.resizing : CLASS_NAMES.resizer.static,
    ),
    container: clsx(
      CLASS_NAMES.container.base,
      isResizing
        ? CLASS_NAMES.container.resizing
        : CLASS_NAMES.container.static,
    ),
  };

  return {
    classNames,
    resizerProps: getResizerProps(),
  };
}
