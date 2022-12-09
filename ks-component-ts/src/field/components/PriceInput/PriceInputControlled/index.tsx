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
  console.log({
    fixedDecimalScale,
  });
  return (
    <BasicNumberInput
      {...props}
      formatForDisplay={(value: number) => value / currencyDecimal}
      formatForValue={(value: number) => value * currencyDecimal}
      prefix={symbol}
      fixedDecimalScale={fixedDecimalScale}
    />
  );
};

export default PriceInputControlled;
