import { useFuse } from "@kanda-libs/ks-design-library";
import { ChangeEvent, useCallback, useState } from "react";
import { SelectOption } from "../../Select/types";
import { SEARCH_OPTIONS } from "./constants";

export interface FilterableSelectHook {
  value: string;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options: SelectOption[];
}

export default function useFilterableSelect(
  initialOptions: SelectOption[]
): FilterableSelectHook {
  const [value, setValue] = useState("");

  const { hits, setQuery } = useFuse(initialOptions, SEARCH_OPTIONS, "");

  const onSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setQuery(e.target.value);
    },
    [setValue]
  );

  console.log("hits", hits);

  return {
    value,
    onSearchInputChange,
    options: hits.map(({ item }) => item),
  };
}
