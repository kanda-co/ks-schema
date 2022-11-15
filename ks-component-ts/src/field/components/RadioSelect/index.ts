import Uncontrolled from "./RadioSelectUncontrolled";
import { type RadioSelectUncontrolledProps } from "./types";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

export { Uncontrolled };

const WithFieldInfo = withFieldInfo(Uncontrolled);

const RadioSelect = withFieldFormController(WithFieldInfo, null, true);

export type RadioSelectBaseProps =
  DefaultFormFieldProps<RadioSelectUncontrolledProps>;

export type RadioSelectWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<RadioSelectBaseProps>;

export type RadioSelectProps =
  FieldFormControllerPropsWithoutChildren<RadioSelectWithInfoProps>;

export default RadioSelect;
