import React, { type FunctionComponent } from "react";
import BasicNumberInput, {
  BasicNumberInputProps,
} from "~/field/components/BasicNumberInput";

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
  autoSize = false,
  placeholder,
  fixedDecimalScale = true,
  ...props
}) {
  return (
    <BasicNumberInput
      {...props}
      formatForDisplay={(value: number) => value / 100}
      formatForValue={(value: number) => value * 100}
      placeholder={placeholder || `${symbol}0.00`}
      prefix={symbol}
      // TODO
      // customInput={
      //   (autoSize
      //     ? AutoSizeInputUncontrolled
      //     : InputUncontrolled) as ComponentType
      // }
    />
  );
};

export default PriceInputControlled;
