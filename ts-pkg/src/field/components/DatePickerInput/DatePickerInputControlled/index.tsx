import React, { FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { formatValue, onValueChange } from "./helpers";
import { NumberFormatValues } from "react-number-format";

export type DatePickerInputControlledProps = {
  symbol?: string;
  currencyDecimal?: number;
} & NumberFormatInputControlledProps;

const DatePickerInputControlled: FunctionComponent<DatePickerInputControlledProps> =
  function ({ symbol = "£", currencyDecimal = 100, ...props }) {
    return (
      <NumberFormatInputControlled
        icon="calendar"
        placeholder="DD / MM / YYYY"
        {...props}
        formatValue={formatValue}
        format="## / ## / ####"
        mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
        onValueChange={(
          event: NumberFormatValues,
          onChange: (...event: any[]) => void
        ) => {
          return onValueChange(event, onChange);
        }}
      />
    );
  };

export default DatePickerInputControlled;
