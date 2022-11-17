import React, { type FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { onValueChange } from "./helpers";
import { NumberFormatValues } from "react-number-format";

export interface PriceInputControlledProps {
  symbol?: string;
  currencyDecimal?: number;
}

const formatValue = (
  value: string | number | null | undefined,
  currencyDecimal: number
) => {
  if (!value) return null;
  if (typeof value === "string") return parseInt(value, 10) / currencyDecimal;
  return value / currencyDecimal;
};

const PriceInputControlled: FunctionComponent<
  NumberFormatInputControlledProps & PriceInputControlledProps
> = function ({ symbol = "£", currencyDecimal = 100, value, ...props }) {
  return (
    <NumberFormatInputControlled
      {...props}
      value={formatValue(value, currencyDecimal)}
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
