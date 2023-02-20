import React, { FunctionComponent } from 'react';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';
import Section from '~/components/Card/CardSection';
import { CLASSNAME, SKELETON } from './constants';

export interface CardOptionProps {
  option?: JSX.Element | string;
  isLoading?: boolean;
  skeleton?: SkeletonLoaderProps | false;
}

const CardOption: FunctionComponent<CardOptionProps> = function ({
  skeleton = false,
  option,
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
      content={option}
    />
  );
};

export default CardOption;
