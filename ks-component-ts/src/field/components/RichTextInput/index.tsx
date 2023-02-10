import Uncontrolled, {
  RichTextInputUncontrolledProps,
} from "./RichTextInputUncontrolled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import { type WrappedWithFieldInfoFormComponentProps } from "~/field/types";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const RichTextInput = withFieldFormController(WithFieldInfo);

export type RichTextInputBaseProps = RichTextInputUncontrolledProps;

export type RichTextInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<RichTextInputBaseProps>;

export type RichTextInputProps =
  FieldFormControllerPropsWithoutChildren<RichTextInputWithInfoProps>;

export default RichTextInput;
