import Controlled, {
  PercentageIncrementInputControlledProps,
} from "./PercentageIncrementInputControlled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import { type WrappedWithFieldInfoFormComponentProps } from "~/field/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const PercentageIncrementInput = withFieldFormController(WithFieldInfo);

export type PercentageIncrementInputBaseProps =
  PercentageIncrementInputControlledProps;

export type PercentageIncrementInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<PercentageIncrementInputBaseProps>;

export type PercentageIncrementInputProps =
  FieldFormControllerPropsWithoutChildren<PercentageIncrementInputWithInfoProps>;

export default PercentageIncrementInput;
