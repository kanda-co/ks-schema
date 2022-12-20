import type { HTMLAttributes, MutableRefObject } from 'react';
import type { IconProps } from '~/components/Icon/types';
import type { ButtonOnClick } from '~/types';

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  id: string;
  onClick?: ButtonOnClick;
  /**
   * ClassNames
   */
  classNames?: {
    button?: string;
    content?: string;
  };
  /**
   * Children
   */
  children?: string | JSX.Element | JSX.Element[];
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Icon props
   */
  iconProps?: IconProps;
  /**
   * sets button to disabled
   */
  disabled?: boolean;
  /**
   * sets button type to submit instead of button
   */
  submit?: boolean;
  /**
   * Button label
   */
  label?: JSX.Element | JSX.Element[] | string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Append
   */
  append?: JSX.Element | JSX.Element[];
  /**
   * Append
   */
  prepend?: JSX.Element | JSX.Element[];
  /**
   * Forwarded ref
   */
  forwardRef?: MutableRefObject<HTMLButtonElement>;
}
