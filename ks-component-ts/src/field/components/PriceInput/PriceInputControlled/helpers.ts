import { NumberFormatValues } from "react-number-format";

export const formatValue = (value: number | null, currencyDecimal: number) =>
  (value as number) / currencyDecimal;

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void,
  currencyDecimal: number
): void => {
  onChange(
    event.value ? (event.value as unknown as number) * currencyDecimal : null
  );
};
