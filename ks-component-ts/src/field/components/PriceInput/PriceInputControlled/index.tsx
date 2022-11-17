import React, { type FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { NumberFormatValues } from "react-number-format";
import AutoSizeInputUncontrolled from "~/field/components/AutoSizeInput/AutoSizeInputUncontrolled";
import { onValueChange } from "./helpers";

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
  value,
  autoSize = false,
  ...props
}) {
  return (
    <NumberFormatInputControlled
      {...props}
      value={value ? (value as number) / currencyDecimal : null}
      placeholder={`${symbol}0.00`}
      prefix={symbol}
      thousandSeparator
      fixedDecimalScale
      decimalScale={2}
      customInput={autoSize ? AutoSizeInputUncontrolled : undefined}
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
