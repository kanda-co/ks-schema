import type { HTMLAttributes, MutableRefObject } from "react";
import { ValidError } from "~/field/types";

export interface DropDownInputOption {
  name: string;
  value: string;
}

export interface DropDownInputUncontrolledProps
  extends Omit<HTMLAttributes<HTMLSelectElement>, "onChange"> {
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
  placeholder?: string;
  className?: string;
  /**
   * Default value of input
   */
  defaultValue?: string;
  /**
   * Forwared ref from parent component
   */
  forwardRef?: MutableRefObject<HTMLSelectElement>;
  /**
   * This function is triggered when the input is changed
   */
  onChange?: (value: string) => void;
  /**
   * This function is triggered when the input is unfocused
   */
  onBlur?: () => void;
  /**
   * Field error message
   */
  error?: ValidError;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  inline?: boolean;
  options?: DropDownInputOption[];
}
