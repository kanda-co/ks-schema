import { useMemo } from "react";

export interface FieldNamesHook {
  depositPercentage: string;
  deposit: string;
  rate: string;
  term: string;
}

/**
 * A hook to return the field names for the plan builder
 */
export default function useFieldNames(name: string): FieldNamesHook {
  return useMemo(
    () => ({
      depositPercentage: `${name}.depositPercentage`,
      deposit: `${name}.deposit`,
      rate: `${name}.rate`,
      term: `${name}.term`,
    }),
    [name]
  );
}
