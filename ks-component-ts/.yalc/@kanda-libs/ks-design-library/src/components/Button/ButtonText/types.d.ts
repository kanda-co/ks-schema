import type { Variant } from '~/types';
import type { HTMLAttributes } from 'react';
import type { IconProps } from '~/components/Icon/types';
import type { ButtonOnClick } from '~types';

export type ButtonTextVariant = 'solid' | 'gradient' | 'ghost' | 'outline';

export interface ButtonTextProps extends HTMLAttributes<HTMLButtonElement> {
  id: string;
  children?: JSX.Element | JSX.Element[];
  onClick?: ButtonOnClick;
  className?: string;
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Icon props
   */
  iconProps?: IconProps;
  /**
   * Button variant name
   */
  variant?: ButtonTextVariant;
  /**
   * Sets button to disabled
   */
  disabled?: boolean;
  /**
   * Sets button type to submit insted of button
   */
  submit?: boolean;
  /**
   * Changes position of the icon to left from right
   */
  left?: boolean;
  /**
   * Button size
   */
  size?: Variant;
  /**
   * Button label
   */
  label?: JSX.Element | JSX.Element[] | string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Icon spacing
   */
  iconSpacing?: Variant;
  /**
   * Append
   */
  append?: JSX.Element | JSX.Element[];
  /**
   * Prepend
   */
  prepend?: JSX.Element | JSX.Element[];
}
