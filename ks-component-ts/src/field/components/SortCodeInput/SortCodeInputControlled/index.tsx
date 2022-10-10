import React, { FunctionComponent } from "react";
import NumberFormatInputControlled from "~/field/components/NumberFormatInput/NumberFormatInputControlled";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import { formatValue, onValueChange } from "./helpers";
import { NumberFormatValues } from "react-number-format";

export interface Props {}

const SortCodeInputControlled: FunctionComponent<NumberFormatInputControlledProps> =
  function (props) {
    return (
      <NumberFormatInputControlled
        {...props}
        format="##-##-##"
        mask="_"
        formatValue={formatValue}
        onValueChange={(
          event: NumberFormatValues,
          onChange: (...event: any[]) => void
        ) => {
          return onValueChange(event, onChange);
        }}
      />
    );
  };

export default SortCodeInputControlled;
