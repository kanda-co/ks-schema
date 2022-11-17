import { NumberFormatValues } from "react-number-format";

export const formatValue = (value: number | null, currencyDecimal: number) =>
  (value as number) / currencyDecimal;

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void,
  currencyDecimal: number
): void => {
  onChange(
    event.floatValue
      ? (event.floatValue as unknown as number) * currencyDecimal
      : null
  );
};
