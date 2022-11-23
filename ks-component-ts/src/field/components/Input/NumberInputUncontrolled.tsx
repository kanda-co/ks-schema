import React, { type FunctionComponent } from "react";
import { type DefaultFormFieldProps } from "~/field/types";
import InputUncontrolled, {
  type InputUncontrolledProps,
} from "./InputUncontrolled";

const NumberInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<InputUncontrolledProps>
> = function (props) {
  return <InputUncontrolled {...props} type="number" />;
};

export default NumberInputUncontrolled;
