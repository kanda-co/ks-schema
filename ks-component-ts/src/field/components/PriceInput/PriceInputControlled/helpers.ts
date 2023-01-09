import { NumberFormatValues } from "react-number-format";

export const formatValue = (value: number | null, currencyDecimal: number) =>
  value !== 0 ? (value as number) / currencyDecimal : undefined;

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void,
  currencyDecimal: number
): void => {
  onChange(
    event.floatValue && event.floatValue > 0
      ? parseInt(
          parseFloat(
            ((event.floatValue as unknown as number) *
              currencyDecimal) as unknown as string
          ).toPrecision(7),
          10
        )
      : undefined
  );
};
