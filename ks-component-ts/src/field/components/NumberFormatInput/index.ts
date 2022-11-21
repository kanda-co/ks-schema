import Controlled from "./NumberFormatInputControlled";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const NumberFormatInput = withFieldFormController(WithFieldInfo);

export type NumberFormatInputBaseProps =
  DefaultFormFieldProps<NumberFormatInputControlledProps>;

export type NumberFormatInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<NumberFormatInputBaseProps>;

export type NumberFormatInputProps =
  FieldFormControllerPropsWithoutChildren<NumberFormatInputWithInfoProps>;

export default NumberFormatInput;
