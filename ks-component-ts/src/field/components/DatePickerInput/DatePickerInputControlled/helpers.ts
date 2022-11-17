import { NumberFormatValues } from "react-number-format";

export const formatValue = (value: string | number | null | undefined) => {
  console.log({ value });
  if (!value) return null;
  if (typeof value !== "string") return value;
  return parseInt((value as string)?.replace(/\//g, ""), 10);
};

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void
): void => {
  if (!event.value) return;
  onChange(event.value);
};
