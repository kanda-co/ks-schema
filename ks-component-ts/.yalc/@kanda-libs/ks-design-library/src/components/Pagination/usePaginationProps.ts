import { useMemo, useCallback } from 'react';
import { createButtons } from './helpers';
import type { PaginationNumberButtonProps } from './PaginationNumberButton';

export interface PaginationPropsHook {
  buttons: PaginationNumberButtonProps[];
  nextPage: () => void;
  previousPage: () => void;
  nextDisabled: boolean;
  previousDisabled: boolean;
}

export default function usePaginationProps(
  pageIndex: number,
  pageCount: number,
  setPage: (pageIndex: number) => void,
): PaginationPropsHook {
  const buttons = useMemo(
    () => createButtons(pageIndex, pageCount, setPage),
    [setPage, pageCount, pageIndex],
  );

  const nextPage = useCallback(
    () => setPage(pageIndex + 1),
    [pageIndex, setPage],
  );
  const previousPage = useCallback(
    () => setPage(pageIndex - 1),
    [pageIndex, setPage],
  );
  const nextDisabled = pageIndex === pageCount - 1;
  const previousDisabled = pageIndex === 0;

  return {
    buttons,
    nextPage,
    previousPage,
    nextDisabled,
    previousDisabled,
  };
}
