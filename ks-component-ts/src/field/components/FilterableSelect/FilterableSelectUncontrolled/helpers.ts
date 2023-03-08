import { SelectOption } from "../../Select/types";

export const getSelectedOption = (options: SelectOption[], value: string) =>
  options.find((option) => option.value === value);
