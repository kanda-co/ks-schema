import { type ComponentType } from "react";
import { type NumberFormatValues } from "react-number-format";
import { type StringIndexedObject } from "@kanda-libs/ks-frontend-services";
import { type FieldFormControllerChildrenArgs } from "~/field/components/FieldFormController/types";
import { type ExtendControllerProps, ValidError } from "~/field/types";

export interface NumberFormatInputControlledProps
  extends ExtendControllerProps {
  /**
   * Name of the input required for form to work
   */
  name?: string;
  /**
   * Control Props
   */
  controlProps?: FieldFormControllerChildrenArgs;
  /**
   * Field label
   */
  label?: string | JSX.Element;
  /**
   * Field warning message
   */
  warning?: string | JSX.Element;
  /**
   * Field error message
   */
  error?: ValidError;
  /**
   * Add thousand separators on number
   */
  thousandSeparator?: string | boolean;
  /**
   * Support decimal point on a number
   */
  decimalSeparator?: string;
  /**
   * Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used
   */
  allowedDecimalSeparators?: string[];
  /**
   * Define the thousand grouping style, It support three types. thousand style
   */
  thousandsGroupStyle?: "thousand" | "lakh" | "wan";
  /**
   * If defined it limits to given decimal scale
   */
  decimalScale?: number;
  /**
   * If true it add 0s to match given decimalScale
   */
  fixedDecimalScale?: boolean;
  /**
   * Add a prefix before the number
   */
  prefix?: string;
  /**
   * Add a suffix after the number
   */
  suffix?: string;
  /**
   * If format given as hash string allow number input inplace of hash. If format given as function, component calls the function with unformatted number and expects formatted number.
   */
  format?: string | ((value: string) => string);
  /**
   * If mask defined, component will show non entered placed with masked value.
   */
  mask?: string | string[];
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Numeric string mode
   */
  isNumericString?: boolean;
  /**
   * Placeholder
   */
  placeholder?: string | JSX.Element;
  /**
   * Format value for display
   */
  formatValue?: (value: string | number | null) => string | number | null;
  /**
   * Fired when the value changes
   */
  onValueChange?: (
    formatValue: NumberFormatValues,
    onChange: (...event: any[]) => void
  ) => void;
  /**
   * Icon
   */
  icon?: string;
  /**
   * Validation
   */
  validation?: StringIndexedObject;
  /**
   * Function component to render instead of InputControlled
   */
  customInput?: ComponentType;
}
