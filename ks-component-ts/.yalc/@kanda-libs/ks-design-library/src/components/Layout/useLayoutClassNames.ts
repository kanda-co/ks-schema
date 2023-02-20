import clsx from 'clsx';
import { CLASS_NAMES } from './constants';
import type { LayoutProps } from '~/components/Layout/index';

export interface LayoutClassNames {
  wrapper: string;
  modalsShader: string;
  content: string;
  container: string;
  header: string;
  footer: string;
  headerWidthLimiter: string;
  contentWidthLimiter: string;
}

export interface LayoutClassNamesHook {
  scrollTop: boolean;
  classNames: LayoutClassNames;
}

export type LayoutClassNamesHookArgs = Omit<
  LayoutProps,
  'children' | 'header' | 'footer'
>;

export default function useLayoutClassNames({
  scrollTop = false,
  stickyHeader,
  stickyFooter,
  headerBg,
  bg,
  noBorder,
  noPadding,
}: LayoutClassNamesHookArgs): LayoutClassNamesHook {
  const {
    containerSticky,
    containerBase,
    footerDefault,
    footerFixed,
    headerBase,
    headerBorder,
    headerFixed,
    widthLimit,
    contentBase,
    contentPadding,
    flexGrow,
    ...classNames
  } = CLASS_NAMES;

  const container = clsx(
    containerBase,
    bg ? `bg-${bg}` : 'bg-neutral-000',
    stickyFooter && containerSticky,
  );

  const header = clsx(
    headerBase,
    !noBorder && headerBorder,
    headerBg ? `bg-${bg}` : 'bg-neutral-000',
    stickyHeader && headerFixed,
  );

  const content = clsx(contentBase, !noPadding && contentPadding);

  const footer = clsx(stickyFooter ? footerFixed : footerDefault);
  const headerWidthLimiter = widthLimit;
  const contentWidthLimiter = clsx(flexGrow, widthLimit);

  return {
    scrollTop,
    classNames: {
      ...classNames,
      content,
      container,
      header,
      footer,
      headerWidthLimiter,
      contentWidthLimiter,
    },
  };
}
