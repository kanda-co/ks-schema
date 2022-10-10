import Uncontrolled from "./RadioSelectUncontrolled";
import { type RadioSelectUncontrolledProps } from "./types";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponent,
} from "~/field/types";

export { Uncontrolled };

const WithFieldInfo = withFieldInfo(Uncontrolled);

const RadioSelect = withFieldFormController(WithFieldInfo, null, true);

export type RadioSelectBaseProps =
  DefaultFormFieldProps<RadioSelectUncontrolledProps>;

export type RadioSelectWithInfoProps =
  WrappedWithFieldInfoFormComponent<RadioSelectBaseProps>;

export type RadioSelectProps =
  FieldFormControllerPropsWithoutChildren<RadioSelectWithInfoProps>;

export default RadioSelect;
