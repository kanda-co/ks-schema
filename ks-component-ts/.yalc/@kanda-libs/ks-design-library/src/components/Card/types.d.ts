import type { HTMLAttributes } from 'react';

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  /**
   * Title of card
   */
  title?: JSX.Element | JSX.Element[] | string;
  padding?: string;
  /**
   * Top right option
   */
  option?: JSX.Element | JSX.Element[] | string;
  footer?: JSX.Element | JSX.Element[] | string;
  footerOptions?: JSX.Element | JSX.Element[] | string;
  noContent?: boolean;
  isLoading?: boolean;
  showLoadingSkeleton?: {
    title?: boolean;
    option?: boolean;
    content?: boolean;
    footer?: boolean;
    footerOptions?: boolean;
  };
  variant?: 'default' | 'simple';
}

export interface CardProps {
  children?: JSX.Element | JSX.Element[];
  option?: JSX.Element | JSX.Element[] | string;
}
