import Uncontrolled, { type InputUncontrolledProps } from "./InputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const Input = withFieldFormController(WithFieldInfo);

export type InputBaseProps = DefaultFormFieldProps<InputUncontrolledProps>;

export type InputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<InputBaseProps>;

export type InputProps =
  FieldFormControllerPropsWithoutChildren<InputWithInfoProps>;

export default Input;
