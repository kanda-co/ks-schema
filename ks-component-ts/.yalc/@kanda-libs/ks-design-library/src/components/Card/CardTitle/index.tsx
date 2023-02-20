import React, { FunctionComponent } from 'react';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';
import Section from '~/components/Card/CardSection';
import { CLASSNAME, SKELETON } from './constants';

export interface CardTitleProps {
  title?: JSX.Element | string;
  isLoading?: boolean;
  skeleton?: SkeletonLoaderProps | boolean;
}

const CardTitle: FunctionComponent<CardTitleProps> = function ({
  skeleton = false,
  title,
  ...props
}) {
  return (
    <Section
      skeletonProps={{
        ...SKELETON,
        ...(typeof skeleton !== 'boolean' ? skeleton : {}),
      }}
      className={CLASSNAME}
      {...props}
      content={title}
    />
  );
};

export default CardTitle;
