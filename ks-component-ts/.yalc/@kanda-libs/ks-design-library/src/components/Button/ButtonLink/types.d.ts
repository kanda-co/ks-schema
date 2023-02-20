import type { BaseButtonProps } from '~/components/Button/BaseButton/types';
import type { IconProps } from '~/components/Icon/types';
import type { ButtonOnClick } from '~/types';

export type ButtonLinkVariant = 'turquoise' | 'grey' | 'light-grey' | 'custom';

export interface ButtonLinkProps extends Omit<BaseButtonProps, 'children'> {
  id: string;
  onClick?: ButtonOnClick;
  /**
   * Children
   */
  children?: JSX.Element | JSX.Element[] | string;
  /**
   * ClassName
   */
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
  variant?: ButtonLinkVariant;
  /**
   * sets button type to submit insted of button
   */
  submit?: boolean;
  /**
   * changes position of the icon to left from right
   */
  left?: boolean;
  /**
   * Button size
   */
  size?: 'custom' | 16 | 14 | 12;
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
  iconSpacing?: number;
}
