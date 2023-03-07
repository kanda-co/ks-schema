import { useFuse } from "@kanda-libs/ks-design-library";
import {
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import { SelectOption } from "../../Select/types";
import { SEARCH_OPTIONS } from "./constants";

export interface FilterableSelectHook {
  inputRef: MutableRefObject<HTMLInputElement | undefined>;
  value: string;
  isFocused: boolean;
  onSelectOption: (value: string) => void;
  onSearchInputFocus: () => void;
  onSearchInputBlur: () => void;
  onSearchInputKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options: SelectOption[];
}

export default function useFilterableSelect(
  initialOptions: SelectOption[]
): FilterableSelectHook {
  const inputRef = useRef<HTMLInputElement>();
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { hits, setQuery } = useFuse(initialOptions, SEARCH_OPTIONS, "");

  const onSelectOption = useCallback(
    (value: string) => {
      setValue(value);
      setQuery(value);
      inputRef?.current?.blur();
    },
    [setValue, setQuery]
  );

  const onSearchInputFocus = useCallback(() => {
    setTimeout(() => {
      setIsFocused(true);
    }, 100);

    if (value) {
      // Clear the active value when the user focuses the input
      setValue("");
      setQuery("");
    }
  }, [setIsFocused, value, setValue]);

  const onSearchInputBlur = useCallback(() => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  }, [setIsFocused]);

  const onSearchInputKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      // Check that the user pressed the enter key
      if (e.key === "Enter") {
        onSelectOption(hits[0].item.name);
      }
    },
    [setValue, hits]
  );

  const onSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setQuery(e.target.value);
    },
    [setValue]
  );

  return {
    inputRef,
    value,
    isFocused,
    onSelectOption,
    onSearchInputFocus,
    onSearchInputBlur,
    onSearchInputKeyDown,
    onSearchInputChange,
    options: hits.map(({ item }) => item),
  };
}
