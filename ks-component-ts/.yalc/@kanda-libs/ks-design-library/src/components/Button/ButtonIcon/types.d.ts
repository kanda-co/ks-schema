import type { HTMLAttributes } from 'react';
import type { IconProps } from '~/components/Icon/types';
import type { ButtonOnClick } from '~/types';

export type ButtonIconVariant =
  | 'turquoise'
  | 'light-turquoise'
  | 'solid-grey'
  | 'ghost-grey'
  | 'custom';

export type ButtonIconSize =
  | number
  | '48-20'
  | '40-20'
  | '32-20'
  | '32-16'
  | '28-16';

export interface ButtonIconProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Children
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * HTML ID of element
   */
  id: string;
  onClick?: ButtonOnClick;
  /**
   * ClassName
   */
  className?: string;
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Button variant
   */
  variant?: ButtonIconVariant;
  /**
   * Button size
   */
  size?: ButtonIconSize;
  /**
   * sets button type to submit insted of button
   */
  submit?: boolean;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Icon props
   */
  iconProps?: IconProps;
  /**
   * indircator color
   */
  indicator?: string;
  /**
   * indicator position
   */
  indicatorPosition?: string;
}
