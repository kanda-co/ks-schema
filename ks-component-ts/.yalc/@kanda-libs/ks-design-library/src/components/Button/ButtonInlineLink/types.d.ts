import type { BaseButtonProps } from '~/components/Button/BaseButton/types';
import type { IconProps } from '~/components/Icon/types';
import type { ButtonOnClick } from '~/types';

export type ButtonInlineLinkVariant =
  | 'custom'
  | 'grey'
  | 'turquoise'
  | 'lavender';

export interface ButtonInlineLinkProps extends BaseButtonProps {
  id: string;
  onClick?: ButtonOnClick;
  /**
   * Children
   */
  children?: string | JSX.Element | JSX.Element[];
  /**
   * ClassName
   */
  className?: string;
  /**
   * Button variant name
   */
  variant?: ButtonInlineLinkVariant;
  /**
   * Whether or not the button is disabled
   */
  disabled?: boolean;
  /**
   * sets button type to submit insted of button
   */
  submit?: boolean;
  /**
   * Button label
   */
  label?: string | JSX.Element | JSX.Element[];
  /**
   * Display Loading state
   */
  isLoading?: boolean;
}
