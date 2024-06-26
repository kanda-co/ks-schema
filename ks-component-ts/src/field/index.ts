import Validator from "./components/Validator";
import Input, {
  Uncontrolled as UncontrolledInput,
  type InputProps,
} from "./components/Input";
import PasswordInput from "./components/PasswordInput";
import BooleanInput, {
  BooleanInputProps,
} from "~/field/components/BooleanInput";
import TextAreaInput, { TextAreaProps } from "~/field/components/TextAreaInput";
import NumberFormatInput, {
  type NumberFormatInputProps,
} from "~/field/components/NumberFormatInput";
import SortCodeInput, {
  type SortCodeInputProps,
} from "~/field/components/SortCodeInput";
import QuantityInput from "~/field/components/QuantityInput";
import PriceInput from "~/field/components/PriceInput";
import DatePickerInput, {
  type DatePickerInputProps,
} from "~/field/components/DatePickerInput";
import FingerprintBooleanInput from "~/field/components/FingerprintBooleanInput";
import NumberInput, {
  type NumberInputProps,
} from "~/field/components/NumberInput";
import PercentageIncrementInput, {
  type PercentageIncrementInputProps,
} from "~/field/components/PercentageIncrementInput";
import BasicNumberInput, {
  type BasicNumberInputProps,
} from "~/field/components/BasicNumberInput";
import Select, { type SelectProps } from "~/field/components/Select";
import FilterableSelect, {
  type FilterableSelectProps,
} from "~/field/components/FilterableSelect";
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
import DropDownInput, {
  DropDownInputProps,
} from "~/field/components/DropDownInput";
import SelectionModal, {
  type SelectionModalProps,
} from "./components/SelectionModal";
import AutoSizePriceInput, {
  type AutoSizePriceInputProps,
} from "~/field/components/AutoSizePriceInput";
import RichTextInput, {
  type RichTextInputProps,
} from "~/field/components/RichTextInput";
import AutoSizeInput, {
  type AutoSizeInputProps,
} from "~/field/components/AutoSizeInput";
import AutoSizeTextArea, {
  type AutoSizeTextAreaProps,
} from "~/field/components/AutoSizeTextArea";
import type {
  WidgetArrayInputProps,
  WidgetArrayWrapperProps,
} from "~/field/components/Array/types";
import type { ArrayWrapperChildrenArgs } from "~/field/components/Array/Wrapper/types";

import RangeInput, { type RangeInputProps } from "./components/RangeInput";

const Field = {
  Address,
  Array,
  BooleanInput,
  BuildFinancePlan,
  CompanyLookupInput,
  DatePickerInput,
  DropDownInput,
  FileInput,
  FingerprintBooleanInput,
  Input,
  NumberFormatInput,
  NumberInput,
  BasicNumberInput,
  PasswordInput,
  PhoneNumberInput,
  Postcode,
  PriceInput,
  PercentageIncrementInput,
  QuantityInput,
  RadioSelect,
  Select,
  FilterableSelect,
  SortCodeInput,
  TableColumnOptionInput,
  TextAreaInput,
  UncontrolledInput,
  Validator,
  SelectionModal,
  RichTextInput,
  AutoSizeInput,
  AutoSizePriceInput,
  AutoSizeTextArea,
  RangeInput,
};

export default Field;

export interface FieldProps {
  BooleanInput: BooleanInputProps;
  BuildFinancePlan: BuildFinancePlanProps;
  CompanyLookupInput: CompanyLookupInputProps;
  DatePickerInput: DatePickerInputProps;
  DropDownInput: DropDownInputProps;
  FileInput: FileInputUncontrolledProps;
  Input: InputProps;
  NumberFormatInput: NumberFormatInputProps;
  NumberInput: NumberInputProps;
  PercentageIncrementInput: PercentageIncrementInputProps;
  PhoneNumberInput: PhoneNumberInputProps;
  Postcode: PostcodeProps;
  RadioSelect: RadioSelectProps;
  Select: SelectProps;
  FilterableSelect: FilterableSelectProps;
  TableColumnOptionInput: TableColumnOptionInputProps;
  TextAreaInput: TextAreaProps;
  SortCodeInput: SortCodeInputProps;
  SelectionModal: SelectionModalProps;
  RichTextInput: RichTextInputProps;
  AutoSizeInput: AutoSizeInputProps;
  AutoSizePriceInput: AutoSizePriceInputProps;
  AutoSizeTextArea: AutoSizeTextAreaProps;
  RangeInput: RangeInputProps;
}

export type {
  WidgetArrayWrapperProps,
  ArrayWrapperChildrenArgs,
  WidgetArrayInputProps,
};

export type { ValidatedFieldProps } from "./types";
