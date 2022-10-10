import { NumberFormatValues } from "react-number-format";

const format = (value: string, pattern: string) => {
  let index = 0;
  const stringValue = value.toString();

  return pattern.replace(/#/g, () => {
    const character = stringValue[index];
    index += 1;
    return character;
  });
};

export const onChange = (value: string | null) =>
  value?.split("-")?.join("") || null;

const formatEvent = (event: NumberFormatValues) => {
  if (!event.value) return null;
  const fmt = format(event.value, "##-##-##");
  return fmt;
};

export const formatValue = (value: string | number | null) =>
  (value as string | null)?.split("-")?.join("") || null;

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void
): void => {
  onChange(formatEvent(event));
};
