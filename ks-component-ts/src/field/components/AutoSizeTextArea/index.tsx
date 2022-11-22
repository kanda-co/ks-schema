import Uncontrolled from "./AutoSizeTextAreaUncontrolled";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import type { AutoSizeTextAreaUncontrolledProps } from "./AutoSizeTextAreaUncontrolled/types";
import { WrappedWithFieldInfoFormComponentProps } from "~/field/types";

export { Uncontrolled };

const AutoSizeTextArea = withFieldFormController(Uncontrolled);

export type AutoSizeTextAreaBaseProps = AutoSizeTextAreaUncontrolledProps;

export type AutoSizeTextAreaProps =
  WrappedWithFieldInfoFormComponentProps<AutoSizeTextAreaBaseProps>;

export default AutoSizeTextArea;
