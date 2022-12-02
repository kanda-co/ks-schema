export const formatValue = (
  value: string | undefined,
  formatForDisplay: (value: number) => number
) => {
  if (typeof value === "undefined") return "";
  return formatForDisplay(parseFloat(value)).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
