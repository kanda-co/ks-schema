import Uncontrolled from "./SelectUncontrolled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import { SelectUncontrolledProps } from "./types";
import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const Select = withFieldFormController(WithFieldInfo);

export type SelectBaseProps = DefaultFormFieldProps<SelectUncontrolledProps>;

export type SelectWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<SelectBaseProps>;

export type SelectProps =
  FieldFormControllerPropsWithoutChildren<SelectWithInfoProps>;

export default Select;
