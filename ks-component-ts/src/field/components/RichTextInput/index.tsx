import Uncontrolled, {
  RichTextInputUncontrolledProps,
} from "./RichTextInputUncontrolled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import { type WrappedWithFieldInfoFormComponentProps } from "~/field/types";

export { Uncontrolled };

const RichTextInput = withFieldFormController(Uncontrolled);

export type RichTextInputBaseProps = RichTextInputUncontrolledProps;

export type RichTextInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<RichTextInputBaseProps>;

export type RichTextInputProps =
  FieldFormControllerPropsWithoutChildren<RichTextInputWithInfoProps>;

export default RichTextInput;
