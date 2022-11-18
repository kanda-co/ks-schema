import Controlled, { PriceInputControlledProps } from "./PriceInputControlled";
import withFieldFormController, {
  type FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import { type WrappedWithFieldInfoFormComponentProps } from "~/field/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const PriceInput = withFieldFormController(WithFieldInfo);

export type PriceInputBaseProps = PriceInputControlledProps;

export type PriceInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<PriceInputBaseProps>;

export type PriceInputProps =
  FieldFormControllerPropsWithoutChildren<PriceInputWithInfoProps>;

export default PriceInput;
