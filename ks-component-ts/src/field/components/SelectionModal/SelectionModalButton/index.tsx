import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import type {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import Uncontrolled, {
  SelectionModalButtonUncontrolledProps,
} from "./SelectionModalButtonUncontrolled";

const WithFieldInfo = withFieldInfo(Uncontrolled);

const SelectionModalButton = withFieldFormController(WithFieldInfo);

export type SelectionModalButtonBaseProps =
  DefaultFormFieldProps<SelectionModalButtonUncontrolledProps>;

export type SelectionModalButtonWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<SelectionModalButtonBaseProps>;

export type SelectionModalButtonProps = SelectionModalButtonWithInfoProps;

export default SelectionModalButton;
