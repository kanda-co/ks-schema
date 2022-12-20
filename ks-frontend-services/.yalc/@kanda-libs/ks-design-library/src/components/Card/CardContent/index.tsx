import React, { FunctionComponent } from 'react';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';
import Section from '~/components/Card/CardSection';
import { CLASSNAME, SKELETON } from './constants';

export interface CardContentProps {
  content?: JSX.Element | string;
  isLoading?: boolean;
  skeleton?: SkeletonLoaderProps | false;
}

const CardContent: FunctionComponent<CardContentProps> = function ({
  skeleton = false,
  ...props
}) {
  return (
    <Section
      skeletonProps={{
        ...SKELETON,
        ...(skeleton || {}),
      }}
      className={CLASSNAME}
      {...props}
    />
  );
};

export default CardContent;
