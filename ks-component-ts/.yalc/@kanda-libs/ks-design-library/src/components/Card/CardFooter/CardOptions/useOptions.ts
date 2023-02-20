import type { CardFooterOption } from './types';
import { showDot } from '~/components/Card/helpers';
import type { SkeletonLoaderProps } from '~/components/SkeletonLoader';

export default function useOptions(
  isLoading?: boolean,
  footer?: boolean,
  footerOptions: JSX.Element[] = [],
  skeletonProps?: SkeletonLoaderProps,
): CardFooterOption[] {
  const options =
    isLoading && skeletonProps
      ? [
          {
            key: 'skeleton',
            showDot: showDot(0, footer),
            content: '',
          },
        ]
      : footerOptions.map((option, i) => ({
          key: `option-${i}`,
          showDot: showDot(i, footer),
          content: option,
        }));

  return options;
}
