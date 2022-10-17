import { NumberFormatValues } from "react-number-format";

export const defaultOnValueChange = (
  numberFieldValue: NumberFormatValues,
  isNumericString: boolean,
  onChange: (...event: any[]) => void
) => {
  if (isNumericString) {
    onChange(numberFieldValue.value || null);
    return;
  }
  onChange(
    numberFieldValue.floatValue || numberFieldValue.floatValue === 0
      ? numberFieldValue.floatValue
      : null
  );
};
