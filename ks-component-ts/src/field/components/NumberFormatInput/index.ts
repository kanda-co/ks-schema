import Controlled from "./NumberFormatInputControlled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponent,
} from "~/field/types";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const NumberFormatInput = withFieldFormController(
  WithFieldInfo,
  null,
  false,
  true
);

export type NumberFormatInputBaseProps =
  DefaultFormFieldProps<NumberFormatInputControlledProps>;

export type NumberFormatInputWithInfoProps =
  WrappedWithFieldInfoFormComponent<NumberFormatInputBaseProps>;

export type NumberFormatInputProps =
  FieldFormControllerPropsWithoutChildren<NumberFormatInputWithInfoProps>;

export default NumberFormatInput;
