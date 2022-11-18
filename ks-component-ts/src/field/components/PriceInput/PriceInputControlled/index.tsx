import React, { type ComponentType, type FunctionComponent } from "react";
import { NumberFormatValues } from "react-number-format";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import AutoSizeInputUncontrolled from "~/field/components/AutoSizeInput/AutoSizeInputUncontrolled";
import InputUncontrolled from "~/field/components/Input/InputUncontrolled";
import { formatValue, onValueChange } from "./helpers";

export interface PriceInputControlledProps {
  symbol?: string;
  currencyDecimal?: number;
  autoSize?: boolean;
}

const PriceInputControlled: FunctionComponent<
  NumberFormatInputControlledProps & PriceInputControlledProps
> = function ({
  symbol = "£",
  currencyDecimal = 100,
  autoSize = false,
  ...props
}) {
  return (
    <NumberFormatInputControlled
      {...props}
      formatValue={(value) => formatValue(value as number, currencyDecimal)}
      placeholder={`${symbol}0.00`}
      prefix={symbol}
      thousandSeparator
      fixedDecimalScale
      decimalScale={2}
      customInput={
        (autoSize
          ? AutoSizeInputUncontrolled
          : InputUncontrolled) as ComponentType
      }
      onValueChange={(
        event: NumberFormatValues,
        onChange: (...event: any[]) => void
      ) => {
        return onValueChange(event, onChange, currencyDecimal);
      }}
    />
  );
};

export default PriceInputControlled;
