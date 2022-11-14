import Controlled, {
  NumberInputControlledProps,
} from "~/field/components/NumberInput/NumberInputControlled";

import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import withFieldFormController, {
  FieldFormControllerPropsWithoutChildren,
} from "~/field/components/FieldFormController/withFieldFormController";

const WithFieldInfo = withFieldInfo(Controlled);

export { Controlled, WithFieldInfo };

const NumberInput = withFieldFormController(WithFieldInfo);

export default NumberInput;

export type NumberInputBaseProps =
  DefaultFormFieldProps<NumberInputControlledProps>;

export type NumberInputWithInfoProps =
  WrappedWithFieldInfoFormComponentProps<NumberInputBaseProps>;

export type NumberInputProps =
  FieldFormControllerPropsWithoutChildren<NumberInputWithInfoProps>;
