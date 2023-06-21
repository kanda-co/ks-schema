import React, { type FunctionComponent } from "react";
import { DefaultFormFieldProps } from "~/field/types";
import Error from "../../Error";
import InputUncontrolled from "../../Input/InputUncontrolled";
import { SelectOption } from "../../Select/types";
import FilterableSelectOption from "../FilterableSelectOption";
import { CLASS_NAMES } from "./constants";
import useFilterableSelect from "./useFilterableSelect";

export interface FilterableSelectUncontrolledProps {
  options: SelectOption[];
  disabled?: boolean;
}

const FilterableSelectUncontrolled: FunctionComponent<
  DefaultFormFieldProps<FilterableSelectUncontrolledProps>
> = function ({
  name = "",
  placeholder,
  options: initialOptions,
  disabled = false,
}) {
  const {
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
    options,
  } = useFilterableSelect(name, initialOptions);

  return (
    <div className={CLASS_NAMES.wrapper} onMouseLeave={onOptionsMouseLeave}>
      <InputUncontrolled
        forwardRef={inputRef}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onSearchInputChange as (...args: any[]) => any}
        onKeyDown={onSearchInputKeyDown as (...args: any[]) => any}
        onFocus={onSearchInputFocus}
        onBlur={onSearchInputBlur}
        error={isFocused && options.length === 0 ? "Enter a valid value" : ""}
        autoComplete="off"
        disabled={disabled}
      />
      {isFocused && options.length === 0 && (
        <Error error="No matching results" />
      )}
      {isFocused && options.length > 0 && (
        <div
          className={CLASS_NAMES.options}
          onMouseEnter={onOptionsMouseEnter}
          onMouseLeave={onOptionsMouseLeave}
        >
          {options.map((option, key) => (
            <FilterableSelectOption
              key={`filterable-select-${option.name}`}
              onSelect={onSelectOption}
              isFocused={key === selectedIndex && !isHoveringOptions}
              searchWords={searchWords}
              {...option}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterableSelectUncontrolled;
