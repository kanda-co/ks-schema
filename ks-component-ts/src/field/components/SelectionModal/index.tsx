import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import Uncontrolled, {
  SelectionModalUncontrolledProps,
} from "./SelectionModalUncontrolled";

const WithFieldInfo = withFieldInfo(Uncontrolled);

export { Uncontrolled, WithFieldInfo };

const SelectionModal = withFieldFormController(WithFieldInfo, null, true, true);

export default SelectionModal;

export type SelectionModalBaseProps =
  DefaultFormFieldProps<SelectionModalUncontrolledProps>;

export type SelectionModalProps =
  WrappedWithFieldInfoFormComponentProps<SelectionModalUncontrolledProps>;
