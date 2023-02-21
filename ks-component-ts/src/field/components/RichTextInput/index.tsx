import Controlled, {
  RichTextInputControlledProps,
} from "./RichTextInputControlled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import {
  DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import { FunctionComponent } from "react";

const WithFieldInfo = withFieldInfo(
  Controlled as FunctionComponent<DefaultFormFieldProps<RichTextInputProps>>,
  false
);

export { Controlled, WithFieldInfo };

const RichTextInput = withFieldFormController(WithFieldInfo);

export type RichTextInputBaseProps = RichTextInputControlledProps;

export type RichTextInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<RichTextInputBaseProps>;

export type RichTextInputProps =
  FieldFormControllerPropsWithoutChildren<RichTextInputWithInfoProps>;

export default RichTextInput;
