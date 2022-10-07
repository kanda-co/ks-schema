import React, { FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { formatValue, onValueChange } from "./helpers";
import { NumberFormatValues } from "react-number-format";

export interface Props {
  symbol?: string;
  currencyDecimal?: number;
}

const PriceInputControlled: FunctionComponent<
  NumberFormatInputControlledProps & Props
> = function ({ symbol = "£", currencyDecimal = 100, ...props }) {
  return (
    <NumberFormatInputControlled
      {...props}
      formatValue={(value) => formatValue(value as number)}
      placeholder={`${symbol}0.00`}
      prefix={symbol}
      thousandSeparator
      fixedDecimalScale
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
