import Validator from "./components/Validator";
import Input, { type InputProps } from "./components/Input";
import PasswordInput from "./components/PasswordInput";
import BooleanInput from "~/field/components/BooleanInput";
import TextAreaInput from "~/field/components/TextAreaInput";
import NumberFormatInput, {
  type NumberFormatInputProps,
} from "~/field/components/NumberFormatInput";
import SortCodeInput from "~/field/components/SortCodeInput";
import QuantityInput from "~/field/components/QuantityInput";
import PriceInput from "~/field/components/PriceInput";
import DatePickerInput, {
  type DatePickerInputProps,
} from "~/field/components/DatePickerInput";
import FingerprintBooleanInput from "~/field/components/FingerprintBooleanInput";
import Select, { type SelectProps } from "~/field/components/Select";
import RadioSelect, {
  type RadioSelectProps,
} from "~/field/components/RadioSelect";
import Array from "~/field/components/Array";

export default {
  Validator,
  Input,
  PasswordInput,
  BooleanInput,
  TextAreaInput,
  NumberFormatInput,
  SortCodeInput,
  QuantityInput,
  PriceInput,
  DatePickerInput,
  FingerprintBooleanInput,
  Select,
  RadioSelect,
  Array,
};

export interface FieldProps {
  Input: InputProps;
  Select: SelectProps;
  RadioSelect: RadioSelectProps;
  DatePickerInput: DatePickerInputProps;
  NumberFormatInput: NumberFormatInputProps;
}
