import Validator from "./components/Validator";
import Input, {
  Uncontrolled as UncontrolledInput,
  type InputProps,
} from "./components/Input";
import PasswordInput from "./components/PasswordInput";
import BooleanInput, {
  BooleanInputProps,
} from "~/field/components/BooleanInput";
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
import NumberInput, {
  type NumberInputProps,
} from "~/field/components/NumberInput";
import Select, { type SelectProps } from "~/field/components/Select";
import RadioSelect, {
  type RadioSelectProps,
} from "~/field/components/RadioSelect";
import Array from "~/field/components/Array";
import BuildFinancePlan, {
  type BuildFinancePlanProps,
} from "~/field/components/BuildFinancePlan";
import Postcode, {
  type PostcodeProps,
} from "~/field/components/Address/AddressPostcode";
import PhoneNumberInput, {
  type PhoneNumberInputProps,
} from "~/field/components/PhoneNumberInput";
import Address from "~/field/components/Address";

const Field = {
  Address,
  Validator,
  Input,
  NumberInput,
  UncontrolledInput,
  PasswordInput,
  BooleanInput,
  TextAreaInput,
  NumberFormatInput,
  PhoneNumberInput,
  SortCodeInput,
  QuantityInput,
  PriceInput,
  DatePickerInput,
  FingerprintBooleanInput,
  Postcode,
  Select,
  RadioSelect,
  Array,
  BuildFinancePlan,
};

export default Field;

export interface FieldProps {
  Input: InputProps;
  Select: SelectProps;
  RadioSelect: RadioSelectProps;
  DatePickerInput: DatePickerInputProps;
  NumberFormatInput: NumberFormatInputProps;
  PhoneNumberInput: PhoneNumberInputProps;
  Postcode: PostcodeProps;
  BuildFinancePlan: BuildFinancePlanProps;
  NumberInput: NumberInputProps;
  BooleanInput: BooleanInputProps;
}

export type { ValidatedFieldProps } from "./types";
