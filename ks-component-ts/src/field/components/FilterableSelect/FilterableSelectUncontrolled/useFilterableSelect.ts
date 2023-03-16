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
import { useFormContext, useWatch } from "react-hook-form";
import useBoundValue from "~/hooks/useBoundValue";
import { SelectOption } from "../../Select/types";
import { SEARCH_OPTIONS } from "./constants";
import { getSelectedOption } from "./helpers";

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
  name: string,
  initialOptions: SelectOption[]
): FilterableSelectHook {
  const inputRef = useRef<HTMLInputElement>();
  const [value, setValue] = useState("");
  // The value is stored as a key, but the input searches / displays
  // as the label for the selected option
  const [inputLabel, setInputLabel] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHoveringOptions, setIsHoveringOptions] = useState(false);
  const [hasGotInitialValue, setHasGotInitialValue] = useState(false);

  const { hits, setQuery } = useFuse(initialOptions, SEARCH_OPTIONS, "");

  const options = useMemo(() => hits.map((hit) => hit.item), [hits]);
  const selectedOption = useMemo(
    () => getSelectedOption(initialOptions, value),
    [initialOptions, value]
  );

  const [
    selectedIndex,
    setSelectedIndex,
    incrementSelectedIndex,
    decrementSelectedIndex,
  ] = useBoundValue(0, hits.length - 1);

  const searchWords = useMemo(() => value.split(" "), [value]);

  const { setValue: setFormValue } = useFormContext();

  const formValue = useWatch({
    name,
  });

  // Used for setting the initial value of the input
  useEffect(() => {
    if (!hasGotInitialValue && formValue && !value) {
      setValue(formValue);
      setQuery(formValue);
      setHasGotInitialValue(true);
    }
  }, [formValue, value, setValue, setQuery]);

  // Used for converting the changed value -> label
  useEffect(() => {
    if (selectedOption?.name && !inputLabel) {
      setInputLabel(selectedOption.name);
    }
  }, [value, initialOptions, setInputLabel]);

  const onSelectOption = useCallback(
    (value: string) => {
      setFormValue(name, value);
      setValue(value);
      setQuery(value);
      setInputLabel(getSelectedOption(initialOptions, value)?.name || "");

      setIsHoveringOptions(false);
      inputRef?.current?.blur();
      setSelectedIndex(0);
    },
    [setValue, setQuery, initialOptions]
  );

  const onSearchInputFocus = useCallback(() => {
    if (value) {
      // Clear the active value when the user focuses the input
      setValue("");
      setInputLabel("");
      setQuery("");
      setFormValue(name, "");
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
          onSelectOption(hits[selectedIndex].item.value);
          break;
        default:
          break;
      }
    },
    [setValue, hits, selectedIndex]
  );

  const onSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputLabel(e.target.value);
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
    value: inputLabel,
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
    options,
  };
}
