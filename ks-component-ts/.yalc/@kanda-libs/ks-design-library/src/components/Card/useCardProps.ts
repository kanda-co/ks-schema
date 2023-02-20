import { useClasses } from '~/hooks';
import type { StringIndexedObject } from '~/types';
import { CARD_CLASS_NAMES } from './constants';
import type { CardProps } from './types';

export type CardPropsHookArgs = Omit<CardProps, 'children' | 'option'>;

export interface CardPropsHook {
  classNames: StringIndexedObject<string>;
  showFooter: boolean;
}

export default function useCardProps({
  className,
  padding,
  footerOptions,
  noContent,
  footer,
  title,
  isLoading,
  showLoadingSkeleton,
  variant,
}: CardPropsHookArgs): CardPropsHook {
  const showHeaderMargin =
    !noContent && (title || (isLoading && showLoadingSkeleton?.title));

  const classNames = useClasses(CARD_CLASS_NAMES, {
    variants: {
      variant,
    },
    container: ['.baseContainer', padding, className],
    header: ['.headerBase', showHeaderMargin && '.headerMargin'],
  });

  const showFooter =
    footer ||
    (footerOptions as string | JSX.Element[]).length > 0 ||
    (isLoading && showLoadingSkeleton?.footer) ||
    (isLoading && showLoadingSkeleton?.footerOptions);

  return {
    classNames,
    showFooter: showFooter as boolean,
  };
}
0;
