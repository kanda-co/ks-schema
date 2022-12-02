export const formatValue = (value: string | undefined) => {
  if (typeof value === "undefined") return "";
  return parseFloat(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
