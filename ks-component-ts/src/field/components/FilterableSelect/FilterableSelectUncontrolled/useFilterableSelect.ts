import { useFuse } from "@kanda-libs/ks-design-library";
import {
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  useState,
  useRef,
  MutableRefObject,
  useMemo,
  useEffect,
} from "react";
import useBoundValue from "~/hooks/useBoundValue";
import { SelectOption } from "../../Select/types";
import { SEARCH_OPTIONS } from "./constants";

export interface FilterableSelectHook {
  inputRef: MutableRefObject<HTMLInputElement | undefined>;
  value: string;
  isFocused: boolean;
  isHoveringOptions: boolean;
  selectedIndex: number;
  searchWords: string[];
  onSelectOption: (value: string) => void;
  onSearchInputFocus: () => void;
  onSearchInputBlur: () => void;
  onSearchInputKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionsMouseEnter: () => void;
  onOptionsMouseLeave: () => void;
  options: SelectOption[];
}

export default function useFilterableSelect(
  initialOptions: SelectOption[]
): FilterableSelectHook {
  const inputRef = useRef<HTMLInputElement>();
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHoveringOptions, setIsHoveringOptions] = useState(false);

  const { hits, setQuery } = useFuse(initialOptions, SEARCH_OPTIONS, "");

  const [
    selectedIndex,
    setSelectedIndex,
    incrementSelectedIndex,
    decrementSelectedIndex,
  ] = useBoundValue(0, hits.length - 1);

  const searchWords = useMemo(() => value.split(" "), [value]);

  const onSelectOption = useCallback(
    (value: string) => {
      setValue(value);
      setQuery(value);
      setIsHoveringOptions(false);
      inputRef?.current?.blur();
      setSelectedIndex(0);
    },
    [setValue, setQuery]
  );

  const onSearchInputFocus = useCallback(() => {
    if (value) {
      // Clear the active value when the user focuses the input
      setValue("");
      setQuery("");
    }

    setTimeout(() => {
      setIsFocused(true);
    }, 100);
  }, [setIsFocused, value, setValue]);

  const onSearchInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsHoveringOptions(false);
  }, [setIsFocused, value, hits]);

  const onSearchInputKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "ArrowDown":
          incrementSelectedIndex();
          break;
        case "Tab":
          e.preventDefault();
          if (e.shiftKey) {
            decrementSelectedIndex();
          } else {
            incrementSelectedIndex();
          }
          break;
        case "ArrowUp":
          decrementSelectedIndex();
          break;
        case "Enter":
          onSelectOption(hits[selectedIndex].item.name);
          break;
        default:
          break;
      }
    },
    [setValue, hits, selectedIndex]
  );

  const onSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setQuery(e.target.value);
    },
    [setValue]
  );

  const onOptionsMouseEnter = useCallback(() => {
    setIsHoveringOptions(true);
  }, [setIsHoveringOptions]);

  const onOptionsMouseLeave = useCallback(() => {
    setIsHoveringOptions(false);
  }, [setIsHoveringOptions]);

  return {
    inputRef,
    value,
    isFocused,
    isHoveringOptions,
    selectedIndex,
    searchWords,
    onSelectOption,
    onSearchInputFocus,
    onSearchInputBlur,
    onSearchInputKeyDown,
    onSearchInputChange,
    onOptionsMouseEnter,
    onOptionsMouseLeave,
    options: hits.map(({ item }) => item),
  };
}
