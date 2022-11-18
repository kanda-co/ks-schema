import React, { FunctionComponent } from "react";
import { NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import PriceInput, { PriceInputProps } from "~/field/components/PriceInput";

export type AutoSizePriceInputProps = NumberFormatInputControlledProps &
  Omit<PriceInputProps, "autoSize">;

const AutoSizePriceInput: FunctionComponent<AutoSizePriceInputProps> =
  function (props) {
    return <PriceInput autoSize {...props} />;
  };

export default AutoSizePriceInput;
