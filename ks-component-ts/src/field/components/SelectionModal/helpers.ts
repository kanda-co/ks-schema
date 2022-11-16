import { SelectOption } from "~/field/components/Select/types";

/**
 * Function to extract the name of the selected value from the options array
 * @param options - Options array for select
 * @param value - value
 */
export const extractName = (options: SelectOption[], value: string): string => {
  const index = options.findIndex((option) => `${option.value}` === `${value}`);

  // If index is -1, string isn't available, return 'Select...'
  if (index === -1) return "Select...";
  // Return the name of the selected value
  return options[index].name;
};
