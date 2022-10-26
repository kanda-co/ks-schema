import Controlled, {
  DatePickerInputControlledProps,
} from "./DatePickerInputControlled";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const DatePickerInput = withFieldFormController(WithFieldInfo);

export type DatePickerInputBaseProps =
  DefaultFormFieldProps<DatePickerInputControlledProps>;

export type DatePickerInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<DatePickerInputBaseProps>;

export type DatePickerInputProps =
  FieldFormControllerPropsWithoutChildren<DatePickerInputWithInfoProps>;

export default DatePickerInput;
