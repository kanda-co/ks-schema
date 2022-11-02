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

export const formatValue = (value: string | number | null) =>
  (value as string | null)?.split("-")?.reverse()?.join("") || null;

export const onValueChange = (
  event: NumberFormatValues,
  onChange: (...event: any[]) => void
): void => {
  if (!event.value) return;
  const fmt = format(event.value, "##-##-####");
  onChange(fmt.split("-").reverse().join("-").replace(/ /g, ""));
};
