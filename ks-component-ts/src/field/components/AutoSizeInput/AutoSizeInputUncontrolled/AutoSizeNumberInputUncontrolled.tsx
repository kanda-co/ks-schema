import React, { FunctionComponent } from "react";
import { DefaultFormFieldProps } from "~/field/types";
import AutoSizeInputUncontrolled, {
  AutoSizeInputUncontrolledProps,
} from "~/field/components/AutoSizeInput/AutoSizeInputUncontrolled/index";

const AutoSizeNumberInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<AutoSizeInputUncontrolledProps>
> = function (props) {
  return <AutoSizeInputUncontrolled {...props} type="number" />;
};

export default AutoSizeNumberInputUncontrolled;
