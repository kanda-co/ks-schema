import React, { FunctionComponent } from 'react';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';
import SkeletonLoader from '~/components/SkeletonLoader';

export interface CardSectionProps {
  skeletonProps: SkeletonLoaderProps;
  className: string;
  content?: JSX.Element | string;
  isLoading?: boolean;
}

const CardSection: FunctionComponent<CardSectionProps> = function ({
  content,
  isLoading = false,
  skeletonProps,
  className,
}) {
  return (
    <div className={className}>
      <SkeletonLoader
        isLoading={isLoading && !!skeletonProps}
        {...skeletonProps}
        afterLoading={content}
      />
    </div>
  );
};

CardSection.displayName = 'Card-CardSection';

export default CardSection;
