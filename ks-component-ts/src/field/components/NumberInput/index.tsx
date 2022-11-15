import Controlled, {
  NumberInputControlledProps,
} from "~/field/components/NumberInput/NumberInputControlled";

import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const NumberInput = WithFieldInfo;

export default NumberInput;

export type NumberInputBaseProps =
  DefaultFormFieldProps<NumberInputControlledProps>;

export type NumberInputProps =
  WrappedWithFieldInfoFormComponentProps<NumberInputBaseProps>;
