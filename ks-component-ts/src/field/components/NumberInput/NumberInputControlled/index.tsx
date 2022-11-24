import React, { type FunctionComponent } from "react";
import type {
  NumberInputType,
  NumberTagInputProps,
} from "~/field/components/NumberInput/types";
import { getNumberTag } from "~/field/components/NumberInput/helpers";

export type NumberInputControlledProps = {
  type?: NumberInputType;
  autoSize?: boolean;
} & Omit<NumberTagInputProps, 'controlProps' | 'control' | 'rules'>;

const NumberInputControlled: FunctionComponent<NumberInputControlledProps> =
  function ({ type = "default", autoSize = false, ...props }) {
    const Tag = getNumberTag(type) as FunctionComponent<NumberTagInputProps>;
    const priceProps = type === "price" ? { autoSize } : {};

    return <Tag {...props} {...priceProps} />;
  };

export default NumberInputControlled;
