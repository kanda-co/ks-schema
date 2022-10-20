import React, { FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { formatValue, onValueChange } from "./helpers";
import { NumberFormatValues } from "react-number-format";

export interface QuantityInputControlledProps {
  quantityDecimal?: number;
}

const QuantityInputControlled: FunctionComponent<
  NumberFormatInputControlledProps & QuantityInputControlledProps
> = function ({ quantityDecimal = 100, ...props }) {
  return (
    <NumberFormatInputControlled
      {...props}
      formatValue={(value) => formatValue(value as number)}
      onValueChange={(
        event: NumberFormatValues,
        onChange: (...event: any[]) => void
      ) => {
        return onValueChange(event, onChange, quantityDecimal);
      }}
    />
  );
};

export default QuantityInputControlled;
