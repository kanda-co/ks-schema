import React, { type FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { onValueChange } from "./helpers";
import { NumberFormatValues } from "react-number-format";

export interface PriceInputControlledProps {
  symbol?: string;
  currencyDecimal?: number;
}

const PriceInputControlled: FunctionComponent<
  NumberFormatInputControlledProps & PriceInputControlledProps
> = function ({ symbol = "£", currencyDecimal = 100, value, ...props }) {
  return (
    <NumberFormatInputControlled
      {...props}
      value={value ? value / currencyDecimal : null}
      placeholder={`${symbol}0.00`}
      prefix={symbol}
      thousandSeparator
      fixedDecimalScale
      decimalScale={2}
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
