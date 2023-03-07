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
}

const FilterableSelectUncontrolled: FunctionComponent<
  DefaultFormFieldProps<FilterableSelectUncontrolledProps>
> = function ({ name, placeholder, options: initialOptions }) {
  const {
    inputRef,
    value,
    isFocused,
    isHoveringOptions,
    searchWords,
    onSelectOption,
    onSearchInputFocus,
    onSearchInputBlur,
    onSearchInputKeyDown,
    onSearchInputChange,
    onOptionsMouseEnter,
    onOptionsMouseLeave,
    options,
  } = useFilterableSelect(initialOptions);

  return (
    <div onMouseLeave={onOptionsMouseLeave}>
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
              isFocused={key === 0 && !isHoveringOptions}
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
