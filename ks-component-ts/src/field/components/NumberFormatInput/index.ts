import Controlled from "./NumberFormatInputControlled";
import withFieldInfo from "../FieldInfo/withFieldInfo";
import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import { type NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const NumberFormatInput = WithFieldInfo;

export type NumberFormatInputBaseProps =
  DefaultFormFieldProps<NumberFormatInputControlledProps>;

export type NumberFormatInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<NumberFormatInputBaseProps>;

export type NumberFormatInputProps = NumberFormatInputWithInfoProps;

export default NumberFormatInput;
