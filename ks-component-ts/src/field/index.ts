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
import CompanyLookupInput, {
  type CompanyLookupInputProps,
} from "~/field/components/CompanyLookupInput";
import TableColumnOptionInput, {
  type TableColumnOptionInputProps,
} from "~/field/components/TableColumnOptionInput";
import Address from "~/field/components/Address";
import FileInput from "~/field/components/FileInput";
import type { FileInputUncontrolledProps } from "~/field/components/FileInput/types";

const Field = {
  Address,
  Array,
  BooleanInput,
  BuildFinancePlan,
  CompanyLookupInput,
  DatePickerInput,
  FileInput,
  FingerprintBooleanInput,
  Input,
  NumberFormatInput,
  NumberInput,
  PasswordInput,
  PhoneNumberInput,
  Postcode,
  PriceInput,
  QuantityInput,
  RadioSelect,
  Select,
  SortCodeInput,
  TableColumnOptionInput,
  TextAreaInput,
  UncontrolledInput,
  Validator,
};

export default Field;

export interface FieldProps {
  BooleanInput: BooleanInputProps;
  BuildFinancePlan: BuildFinancePlanProps;
  CompanyLookupInput: CompanyLookupInputProps;
  DatePickerInput: DatePickerInputProps;
  FileInput: FileInputUncontrolledProps;
  Input: InputProps;
  NumberFormatInput: NumberFormatInputProps;
  NumberInput: NumberInputProps;
  PhoneNumberInput: PhoneNumberInputProps;
  Postcode: PostcodeProps;
  RadioSelect: RadioSelectProps;
  Select: SelectProps;
  TableColumnOptionInput: TableColumnOptionInputProps;
}

export type { ValidatedFieldProps } from "./types";
