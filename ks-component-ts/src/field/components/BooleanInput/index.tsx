import Uncontrolled from "./BooleanInputUncontrolled";
import Controlled from "./BooleanInputControlled";

import withFieldInfo from "../FieldInfo/withFieldInfo";

export { Uncontrolled, Controlled };

import {
  type DefaultFormFieldProps,
  type WrappedWithFieldInfoFormComponent,
} from "~/field/types";
import { type BooleanInputControlledProps } from "~/field/components/BooleanInput/BooleanInputControlled";
import { FunctionComponent } from "react";

const WithFieldInfo = withFieldInfo(Controlled as FunctionComponent);

const BooleanInput = WithFieldInfo;

export type BooleanInputBaseProps =
  DefaultFormFieldProps<BooleanInputControlledProps>;

export type BooleanInputWithInfoProps =
  WrappedWithFieldInfoFormComponent<BooleanInputBaseProps>;

export type BooleanInputProps = BooleanInputWithInfoProps;

export default BooleanInput;
