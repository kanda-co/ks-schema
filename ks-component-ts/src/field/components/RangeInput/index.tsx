import RangeInputUncontrolled, {
  type RangeInputUncontrolledProps,
} from "./RangeInputUncontrolled";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

const WithFieldInfo = withFieldInfo(RangeInputUncontrolled);

export { RangeInputUncontrolled, WithFieldInfo };

const RangeInput = withFieldFormController(WithFieldInfo);

export type RangeInputBaseProps =
  DefaultFormFieldProps<RangeInputUncontrolledProps>;

export type RangeInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<RangeInputBaseProps>;

export type RangeInputProps =
  FieldFormControllerPropsWithoutChildren<RangeInputWithInfoProps>;

export default RangeInput;
