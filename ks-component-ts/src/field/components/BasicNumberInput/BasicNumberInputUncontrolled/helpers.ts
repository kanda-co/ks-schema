export const formatValue = (value: number | undefined) => {
  if (typeof value === "undefined") return "";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export interface RenderDisplayValueArgs {
  value: string;
  prefix: string;
  suffix: string;
  formatForDisplay: (value: number) => number;
}

export const renderDisplayValue = ({
  value,
  prefix,
  suffix,
  formatForDisplay,
}: RenderDisplayValueArgs) => {
  const parsedValue = value ? formatForDisplay(parseFloat(value)) : "";
  if (!parsedValue) return [prefix, "0.00"].join("");
  return [prefix, formatValue(parsedValue), suffix].join("");
};
