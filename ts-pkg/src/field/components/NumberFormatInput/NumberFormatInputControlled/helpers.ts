import { NumberFormatValues } from "react-number-format";

export const defaultOnValueChange = (
  formatValue: NumberFormatValues,
  isNumericString: boolean,
  onChange: (...event: any[]) => void
) => {
  if (isNumericString) {
    onChange(formatValue.value || null);
    return;
  }
  onChange(
    formatValue.floatValue || formatValue.floatValue === 0
      ? formatValue.floatValue
      : null
  );
};
