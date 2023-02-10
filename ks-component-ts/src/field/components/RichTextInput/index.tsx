import Uncontrolled, {
  RichTextInputControlledProps,
} from "./RichTextInputControlled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import { type WrappedWithFieldInfoFormComponentProps } from "~/field/types";

export { Uncontrolled };

const RichTextInput = withFieldFormController(Uncontrolled);

export type RichTextInputBaseProps = RichTextInputControlledProps;

export type RichTextInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<RichTextInputBaseProps>;

export type RichTextInputProps =
  FieldFormControllerPropsWithoutChildren<RichTextInputWithInfoProps>;

export default RichTextInput;
