import React, { FunctionComponent } from 'react';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';
import useOptions from './useOptions';
import { CLASSNAMES, SKELETON } from './constants';
import SkeletonLoader from '~/components/SkeletonLoader';

export interface CardOptionsProps {
  /**
   * Whether the footer is visible
   */
  footer?: boolean;
  /**
   * Item footer options
   */
  footerOptions?: JSX.Element[];
  /**
   * Data is loading state
   */
  isLoading?: boolean;
  /**
   * Skeleton props for footer options
   */
  footerOptionsSkeleton?: SkeletonLoaderProps;
}

const CardOptions: FunctionComponent<CardOptionsProps> = function ({
  footer,
  footerOptions = [],
  isLoading = false,
  footerOptionsSkeleton = {},
}) {
  const options = useOptions(
    isLoading,
    footer,
    footerOptions,
    footerOptionsSkeleton,
  );

  const skeletonProps = footerOptionsSkeleton || SKELETON;

  return (
    <>
      {options.map((option) => (
        <React.Fragment key={option.key}>
          {option.showDot && <span className={CLASSNAMES.dot} />}
          <span className={CLASSNAMES.option}>
            <SkeletonLoader
              isLoading={isLoading && !!footerOptionsSkeleton}
              {...skeletonProps}
              afterLoading={option.content}
            />
          </span>
        </React.Fragment>
      ))}
    </>
  );
};

export default CardOptions;
