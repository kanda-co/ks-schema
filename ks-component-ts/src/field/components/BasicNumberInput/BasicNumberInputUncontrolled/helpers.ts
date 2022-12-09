import { FunctionComponent } from "react";
import AutoSizeInputUncontrolled, {
  type AutoSizeInputUncontrolledProps,
} from "~/field/components/AutoSizeInput/AutoSizeInputUncontrolled";
import InputUncontrolled, {
  type InputUncontrolledProps,
} from "~/field/components/Input/InputUncontrolled";
import type { DefaultFormFieldProps } from "~/field/types";

export const formatValue = (
  value: number | undefined,
  decimalScale: number
) => {
  if (typeof value === "undefined") return "";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimalScale,
    maximumFractionDigits: decimalScale,
  });
};

export interface RenderDisplayValueArgs {
  value: string;
  prefix: string;
  suffix: string;
  formatForDisplay: (value: number) => number;
  decimalScale: number;
}

export const renderDisplayValue = ({
  value,
  prefix,
  suffix,
  formatForDisplay,
  decimalScale,
}: RenderDisplayValueArgs) => {
  const parsedValue = value ? formatForDisplay(parseFloat(value)) : "";
  if (!parsedValue) return "";
  return [prefix, formatValue(parsedValue, decimalScale), suffix].join("");
};

export const getInputTag = (autoSize: boolean) => {
  if (autoSize) return AutoSizeInputUncontrolled;
  return InputUncontrolled;
};
