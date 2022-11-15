import Uncontrolled, { BooleanFieldProps } from "./BooleanInputUncontrolled";
import Controlled from "./BooleanInputControlled";

import withFieldInfo from "../FieldInfo/withFieldInfo";

export { Uncontrolled, Controlled };

import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import { type BooleanInputControlledProps } from "~/field/components/BooleanInput/BooleanInputControlled";
import { FunctionComponent } from "react";

const WithFieldInfo = withFieldInfo(
  Controlled as FunctionComponent<DefaultFormFieldProps<BooleanFieldProps>>
);

const BooleanInput = WithFieldInfo;

export type BooleanInputBaseProps =
  DefaultFormFieldProps<BooleanInputControlledProps>;

export type BooleanInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<BooleanInputBaseProps>;

export type BooleanInputProps = BooleanInputWithInfoProps;

export default BooleanInput;
