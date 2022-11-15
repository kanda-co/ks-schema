import React, { FunctionComponent } from "react";
import type {
  NumberInputType,
  NumberTagInputProps,
} from "~/field/components/NumberInput/types";
import { getNumberTag } from "~/field/components/NumberInput/helpers";

export type NumberInputControlledProps = {
  type?: NumberInputType;
};

const NumberInputControlled: FunctionComponent<NumberInputControlledProps> =
  function ({ type = "default", ...props }) {
    const Tag = getNumberTag(type) as FunctionComponent<NumberTagInputProps>;

    return <Tag {...props} />;
  };

export default NumberInputControlled;
