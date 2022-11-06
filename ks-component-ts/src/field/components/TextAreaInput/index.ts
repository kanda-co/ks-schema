import Uncontrolled, {
  type TextAreaInputUncontrolledProps,
} from "./TextAreaInputUncontrolled";
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

const TextAreaInput = withFieldFormController(WithFieldInfo);

export type TextAreaBaseProps =
  DefaultFormFieldProps<TextAreaInputUncontrolledProps>;

export type TextAreaWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<TextAreaBaseProps>;

export type TextAreaProps =
  FieldFormControllerPropsWithoutChildren<TextAreaWithInfoProps>;

export default TextAreaInput;
