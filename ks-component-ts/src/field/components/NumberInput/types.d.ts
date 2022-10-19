import { NUMBER_INPUT_TYPE } from "~/field/components/NumberInput/constants";
import type { PriceInputControlledProps } from "~/field/components/PriceInput/PriceInputControlled";
import type { DatePickerInputControlledProps } from "~/field/components/DatePickerInput/DatePickerInputControlled";
import type { QuantityInputControlledProps } from "~/field/components/QuantityInput/QuantityInputControlled";
import { NumberFormatInputControlledProps } from "~/field/components/NumberFormatInput/types";

export type NumberInputType = typeof NUMBER_INPUT_TYPE[number];

export type NumberTagInputProps = PriceInputControlledProps &
  DatePickerInputControlledProps &
  QuantityInputControlledProps &
  NumberFormatInputControlledProps;
