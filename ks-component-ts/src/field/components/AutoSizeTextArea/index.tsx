import Uncontrolled from "./AutoSizeTextAreaUncontrolled";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import type { AutoSizeTextAreaUncontrolledProps } from "./AutoSizeTextAreaUncontrolled/types";
import { WrappedWithFieldInfoFormComponentProps } from "~/field/types";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";

const WithInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithInfo };

const AutoSizeTextArea = withFieldFormController(WithInfo);

export type AutoSizeTextAreaBaseProps = AutoSizeTextAreaUncontrolledProps;

export type AutoSizeTextAreaWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<AutoSizeTextAreaBaseProps>;

export type AutoSizeTextAreaProps =
  WrappedWithFieldInfoFormComponentProps<AutoSizeTextAreaWithInfoProps>;

export default AutoSizeTextArea;
