import Controlled from "./SortCodeInputControlled";
import withFieldFormController from "~/field/components/FieldFormController/withFieldFormController";
import withFieldInfo from "~/field/components/FieldInfo/withFieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponentProps,
} from "~/field/types";
import { NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";

const WithInfo = withFieldInfo(Controlled);

export { Controlled, WithInfo };

const SortCodeInput = withFieldFormController(WithInfo);

export type SortCodeInputProps =
  WrappedWithFieldInfoFormComponentProps<NumberFormatInputControlledProps>;

export default SortCodeInput;
