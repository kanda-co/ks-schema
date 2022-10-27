import {
  type ForwardRefExoticComponent,
  InputHTMLAttributes,
  type RefAttributes,
} from "react";

export interface HandleProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Name of the input required for form to work
   */
  name?: string;
  /**
   * The HTML element ID.
   */
  id?: string;
  /**
   * This function is triggered when the input is changed
   */
  onChange?: (...event: any[]) => void;
  /**
   * This function is triggered when the input is unfocused
   */
  onBlur?: (...event: any[]) => void;
  /**
   * value
   */
  value?: string | ReadonlyArray<string> | number | undefined;
  /**
   * Initially checked
   */
  defaultChecked?: boolean;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Boolean to define whether to use small switch or not
   */
  small?: boolean;
}

/**
 * A type with the values of the possible types of handles
 */
export type HandleType = "switch" | "checkbox" | "radio" | "radioCheck";

export type HandleComponent = ForwardRefExoticComponent<
  HandleProps & RefAttributes<JSX.Element>
>;
