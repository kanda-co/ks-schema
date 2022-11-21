import React, { FunctionComponent } from "react";
import NumberInput, { NumberInputProps } from "~/field/components/NumberInput";

export type AutoSizePriceInputProps = Omit<NumberInputProps, "autoSize">;

const AutoSizePriceInput: FunctionComponent<AutoSizePriceInputProps> =
  function (props) {
    return <NumberInput {...props} type="price" autoSize />;
  };

export default AutoSizePriceInput;
