export const formatValue = (
  value: number | undefined,
  decimalScale: number
) => {
  if (typeof value === "undefined") return "";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimalScale,
    maximumFractionDigits: decimalScale,
  });
};

export interface RenderDisplayValueArgs {
  value: string;
  prefix: string;
  suffix: string;
  formatForDisplay: (value: number) => number;
  decimalScale: number;
}

export const renderDisplayValue = ({
  value,
  prefix,
  suffix,
  formatForDisplay,
  decimalScale,
}: RenderDisplayValueArgs) => {
  const parsedValue = value ? formatForDisplay(parseFloat(value)) : "";
  if (!parsedValue) return "";
  return [prefix, formatValue(parsedValue, decimalScale), suffix].join("");
};
