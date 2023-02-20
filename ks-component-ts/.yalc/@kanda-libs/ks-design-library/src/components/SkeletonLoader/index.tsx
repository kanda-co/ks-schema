import React, { FunctionComponent } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

import useSkeletonLoader from '~/components/SkeletonLoader/useSkeletonLoader';

export interface SkeletonLoaderProps extends SkeletonProps {
  /**
   * The loading state of the component - defaults to false
   */
  isLoading?: boolean;
  /**
   * The component to show after loading
   */
  afterLoading?: JSX.Element | string | null;
  /**
   * HTML className for the wrapper
   */
  wrapperClassName?: string;
}

const SkeletonLoader: FunctionComponent<SkeletonLoaderProps> = function ({
  isLoading = false,
  afterLoading = <div />,
  wrapperClassName,
  ...restProps
}) {
  const { loading, classNames } = useSkeletonLoader(
    wrapperClassName,
    isLoading,
  );

  const SkeletonTag = Skeleton as unknown as FunctionComponent<SkeletonProps>;

  if (loading) {
    return (
      <div className={classNames.wrapper}>
        <SkeletonTag {...restProps} />
      </div>
    );
  }

  return <>{afterLoading}</>;
};

export default SkeletonLoader;
