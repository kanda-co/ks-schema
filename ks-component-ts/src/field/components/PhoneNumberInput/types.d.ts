import type { InputHTMLAttributes } from "react";
import type { ErrorMessage } from "~/field/types";

export interface PhoneNumberInputOption {
  name: string;
  value: string;
}

export interface PhoneNumberInputUncontrolledProps {
  /**
   * Name of the input required for form to work
   */
  name?: string;
  /**
   * Name of the input required for form to work
   */
  countryCodeName?: string;
  forwardRef?: any;
  className?: string;
  /**
   * The HTML element ID.
   */
  id?: string;
  /**
   * Text that would be displayed when there is no value
   */
  placeholder?: string | JSX.Element;
  /**
   * Default value of input
   */
  defaultValue?: string;
  /**
   * This function is triggered when the input is changed
   */
  phoneNumberProps?: InputHTMLAttributes<HTMLInputElement>;
  /**
   * Field error message
   */
  error?: ErrorMessage;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Select options
   */
  options?: PhoneNumberInputOption[];
}
