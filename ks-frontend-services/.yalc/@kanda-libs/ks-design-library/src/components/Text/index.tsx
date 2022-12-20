import React, { FunctionComponent, HTMLAttributes } from 'react';
import type { SkeletonProps } from 'react-loading-skeleton';
import SkeletonLoader from '~/components/SkeletonLoader';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  className?: string;
  skeletonClassName?: string;
  isLoading?: boolean;
  textComponent?: keyof JSX.IntrinsicElements;
  skeletonProps?: SkeletonProps;
  htmlFor?: string;
}

const Text: FunctionComponent<TextProps> = function ({
  text,
  isLoading = false,
  textComponent: TextComponent = 'span',
  className = 'text-style-g',
  skeletonClassName = '',
  skeletonProps = {},
  ...restProps
}) {
  const TextComponentTag = TextComponent as unknown as FunctionComponent<
    HTMLAttributes<HTMLElement>
  >;

  return (
    <TextComponentTag
      className={className}
      {...(restProps as HTMLAttributes<HTMLElement>)}
    >
      <SkeletonLoader
        isLoading={isLoading}
        className={skeletonClassName}
        afterLoading={text}
        {...skeletonProps}
      />
    </TextComponentTag>
  );
};

export default Text;
