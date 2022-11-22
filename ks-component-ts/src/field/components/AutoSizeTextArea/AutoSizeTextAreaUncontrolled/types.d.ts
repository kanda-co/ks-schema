import type { ChangeEvent, MutableRefObject } from "react";
import type { ValidError } from "~/field/types";

export interface AutoSizeTextAreaUncontrolledProps {
  /**
   * ClassName
   */
  className?: string;
  /**
   * Name of the textarea required for form to work
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
  /**
   * Default value of input
   */
  defaultValue?: string | number | readonly string[];
  /**
   * Forwared ref from parent component
   */
  forwardRef?: MutableRefObject<HTMLTextAreaElement>;
  /**
   * This function is triggered when the input is changed
   */
  onChange?: () => void;
  /**
   * This function is triggered when the input is unfocused
   */
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Field error message
   */
  error?: ValidError;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Display new line on enter
   */
  disableNewLine?: boolean;
  /**
   * Collapses to one line when is defocused
   */
  collapsible?: boolean;
}
