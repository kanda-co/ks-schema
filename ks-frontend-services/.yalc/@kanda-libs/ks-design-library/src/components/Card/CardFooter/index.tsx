import React, { FunctionComponent } from 'react';
import SkeletonLoader, {
  SkeletonLoaderProps,
} from '~/components/SkeletonLoader';
import { CLASSNAME, SKELETON } from './constants';
import Options from './CardOptions';

export interface CardFooterProps {
  /**
   * Item footer
   */
  footer?: JSX.Element | string | null;
  /**
   * Item footer options
   */
  footerOptions?: JSX.Element[];
  /**
   * Data is loading state
   */
  isLoading?: boolean;
  /**
   * Skeleton props for footer
   */
  footerSkeleton?: SkeletonLoaderProps | null;
  /**
   * Skeleton props for footer options
   */
  footerOptionsSkeleton?: SkeletonLoaderProps;
}

const CardFooter: FunctionComponent<CardFooterProps> = function ({
  footer = null,
  footerOptions = [],
  isLoading = false,
  footerSkeleton = null,
  footerOptionsSkeleton = {},
}) {
  return (
    <div className={CLASSNAME}>
      <SkeletonLoader
        isLoading={isLoading && !!footerSkeleton}
        {...SKELETON}
        {...footerSkeleton}
        afterLoading={footer}
      />
      <Options
        footer={!!footer || !!footerSkeleton}
        footerOptions={footerOptions}
        isLoading={isLoading && !!footerOptionsSkeleton}
        footerOptionsSkeleton={footerOptionsSkeleton}
      />
    </div>
  );
};

export default CardFooter;
