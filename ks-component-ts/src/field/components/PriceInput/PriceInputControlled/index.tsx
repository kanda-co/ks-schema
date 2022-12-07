import React, { type FunctionComponent } from "react";
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
  BasicNumberInputProps & PriceInputControlledProps
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
      formatForDisplay={(value: number) => value / 100}
      formatForValue={(value: number) => value * 100}
      prefix={symbol}
    />
  );
};

export default PriceInputControlled;
