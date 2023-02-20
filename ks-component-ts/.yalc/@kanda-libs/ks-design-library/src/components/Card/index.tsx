import React, { FunctionComponent } from 'react';
import type { CardProps } from './types';
import useCardProps from '~/components/Card/useCardProps';
import CardContent from '~/components/Card/CardContent';
import CardFooter from '~/components/Card/CardFooter';
import CardTitle from '~/components/Card/CardTitle';
import CardOption from '~/components/Card/CardOption';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';

const Card: FunctionComponent<CardProps> = function ({
  children = null,
  option,
  title,
  footer,
  footerOptions = [],
  isLoading = false,
  showLoadingSkeleton,
  className,
  padding = 'py-5 px-4',
  noContent = false,
  variant = 'default',
  ...restProps
}) {
  const { classNames, showFooter } = useCardProps({
    className,
    padding,
    noContent,
    variant,
    title,
    footer,
    footerOptions,
    isLoading,
    showLoadingSkeleton,
  });

  return (
    <div className={classNames.container} {...restProps}>
      <div className={classNames.header}>
        <CardTitle
          title={title as JSX.Element | string}
          isLoading={isLoading}
          skeleton={showLoadingSkeleton?.title}
        />
        <CardOption
          option={option as JSX.Element | string}
          isLoading={isLoading}
          skeleton={
            showLoadingSkeleton?.option as unknown as SkeletonLoaderProps
          }
        />
      </div>
      <CardContent
        content={children as JSX.Element | string}
        isLoading={isLoading}
        skeleton={
          showLoadingSkeleton?.content as unknown as SkeletonLoaderProps
        }
      />
      {showFooter && (
        <CardFooter
          footer={footer as JSX.Element | string | null}
          footerOptions={footerOptions as JSX.Element[]}
          isLoading={isLoading}
          footerSkeleton={
            showLoadingSkeleton?.footer as unknown as SkeletonLoaderProps
          }
          footerOptionsSkeleton={
            showLoadingSkeleton?.footerOptions as unknown as SkeletonLoaderProps
          }
        />
      )}
    </div>
  );
};

export default Card;
