import { NumberFormatValues } from "react-number-format";

export const formatValue = (value: number | null) => value;

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void,
  quantityDecimal: number
): void => {
  onChange(
    event.value ? (event.value as unknown as number) * quantityDecimal : null
  );
};
