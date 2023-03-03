import { ForwardedRef } from "react";
import { ValidError } from "~/field/types";

export interface SelectOption {
  name: string;
  value: string;
  disabled?: boolean;
}

export interface SelectUncontrolledProps {
  /**
   * Name of the input required for form to work
   */
  name?: string;
  /**
   * The HTML element ID.
   */
  id?: string;
  /**
   * Text that would be displayed when there is no value
   */
  placeholder?: string | JSX.Element;
  /**
   * class name
   */
  className?: string;
  /**
   * Select options
   */
  options?: SelectOption[];
  /**
   * Default value of input
   */
  defaultValue?: string;
  /**
   * Forwared ref from parent component
   */
  forwardRef?: ForwardedRef<JSX.Element>;
  /**
   * This function is triggered when the input is changed
   */
  onChange?: (...event: any[]) => void;
  /**
   * This function is triggered when the input is unfocused
   */
  onBlur?: (...event: any[]) => void;
  /**
   * Field error message
   */
  error?: ValidError;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Disable the default value
   */
  disableDefaultValue?: boolean;
}
