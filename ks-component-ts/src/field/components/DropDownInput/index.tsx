import Uncontrolled from "./DropDownInputUncontrolled";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import { DropDownInputUncontrolledProps } from "~/field/components/DropDownInput/types";

export { Uncontrolled };

const DropDownInput = withFieldFormController(Uncontrolled);

export type DropDownInputProps =
  FieldFormControllerPropsWithoutChildren<DropDownInputUncontrolledProps>;

export default DropDownInput;
