import { SelectOption } from "~/field/components/Select/types";
import { ValidError } from "~/field/types";
import { MutableRefObject } from "react";

export interface SelectionModalProps {
  /**
   * Children
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   * Name of the input required for form to work
   */
  name: string;
  /**
   * Enables multi option select
   */
  multiple?: boolean;
  /**
   * Select options
   */
  options?: SelectOption[];
  /**
   * Field label
   */
  label?: string | JSX.Element;
  /**
   * Field warning message
   */
  warning?: string | JSX.Element;
  /**
   * Other props that are passed to wrapper component
   */
  wrapperProps?: any;
  /**
   * icon name
   */
  icon?: string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Field error message
   */
  error?: ValidError;
  forwardRef?: MutableRefObject<HTMLElement>;
}