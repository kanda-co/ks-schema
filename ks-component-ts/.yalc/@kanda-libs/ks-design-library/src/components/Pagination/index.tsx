import React, { FunctionComponent } from 'react';
import usePaginationProps from './usePaginationProps';
import PaginationNavButton from './PaginationNavButton';
import PaginationNumberButton from './PaginationNumberButton';
import { CLASS_NAMES } from './constants';

export interface PaginationProps {
  pageIndex: number;
  pageCount: number;
  setPage: (pageIndex: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = function ({
  pageIndex,
  pageCount,
  setPage,
}) {
  const { buttons, previousPage, previousDisabled, nextPage, nextDisabled } =
    usePaginationProps(pageIndex, pageCount, setPage);

  return (
    <div className={CLASS_NAMES.container}>
      <PaginationNavButton
        id="pagination-nav-previous"
        onClick={previousPage}
        disabled={previousDisabled}
        next={false}
      />
      <div className={CLASS_NAMES.buttonWrapper}>
        {buttons.map((button) => (
          <PaginationNumberButton key={button.id} {...button} />
        ))}
      </div>
      <PaginationNavButton
        id="pagination-nav-next"
        onClick={nextPage}
        disabled={nextDisabled}
        next
      />
    </div>
  );
};

export default Pagination;
