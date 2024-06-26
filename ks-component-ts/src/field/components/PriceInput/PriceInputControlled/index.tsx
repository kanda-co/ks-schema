import React, { type FunctionComponent } from "react";
import { DefaultFormFieldProps } from "~/field/types";
import BasicNumberInput, {
  type BasicNumberInputProps,
} from "../../BasicNumberInput";

export interface PriceInputControlledProps {
  symbol?: string;
  currencyDecimal?: number;
  autoSize?: boolean;
  placeholder?: string;
  fixedDecimalScale?: boolean;
}

const PriceInputControlled: FunctionComponent<
  DefaultFormFieldProps<BasicNumberInputProps & PriceInputControlledProps>
> = function ({
  symbol = "£",
  currencyDecimal = 100,
  placeholder,
  fixedDecimalScale = true,
  ...props
}) {
  return (
    <BasicNumberInput
      {...props}
      formatForDisplay={(value: number) => value / currencyDecimal}
      formatForValue={(value: number) => Math.round(value * currencyDecimal)}
      prefix={symbol}
      fixedDecimalScale={fixedDecimalScale}
    />
  );
};

export default PriceInputControlled;
