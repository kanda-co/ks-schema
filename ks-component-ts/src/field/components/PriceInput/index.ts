import Controlled, { PriceInputControlledProps } from "./PriceInputControlled";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import { InputUncontrolledProps } from "~/field/components/Input/InputUncontrolled";
import { NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const PriceInput = withFieldFormController(WithFieldInfo);

export type PriceInputBaseProps = DefaultFormFieldProps<
  NumberFormatInputControlledProps & PriceInputControlledProps
>;

export type PriceInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<PriceInputBaseProps>;

export type PriceInputProps =
  FieldFormControllerPropsWithoutChildren<PriceInputWithInfoProps>;

export default PriceInput;
