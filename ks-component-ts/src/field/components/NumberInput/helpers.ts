import type { NumberInputType } from "./types";
import { Controlled as PriceInput } from "~/field/components/PriceInput";
import { Controlled as SortCodeInput } from "~/field/components/SortCodeInput";
import { Controlled as DatePickerInput } from "~/field/components/DatePickerInput";
import { Controlled as QuantityInput } from "~/field/components/QuantityInput";
import { Controlled as NumberFormatInput } from "~/field/components/NumberFormatInput";

export const getNumberTag = (type: NumberInputType) => {
  switch (type) {
    case "price":
      return PriceInput;
    case "sortCode":
      return SortCodeInput;
    case "datePicker":
      return DatePickerInput;
    case "quantity":
      return QuantityInput;
    default:
      return NumberFormatInput;
  }
};
