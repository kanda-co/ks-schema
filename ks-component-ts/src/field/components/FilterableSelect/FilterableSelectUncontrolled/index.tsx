import React, { type FunctionComponent } from "react";
import { DefaultFormFieldProps } from "~/field/types";
import InputUncontrolled from "../../Input/InputUncontrolled";
import { SelectOption } from "../../Select/types";
import FilterableSelectOption from "../FilterableSelectOption";
import useFilterableSelect from "./useFilterableSelect";

export interface FilterableSelectUncontrolledProps {
  options: SelectOption[];
}

const FilterableSelectUncontrolled: FunctionComponent<
  DefaultFormFieldProps<FilterableSelectUncontrolledProps>
> = function ({ name, options: initialOptions }) {
  const {
    inputRef,
    value,
    isFocused,
    onSelectOption,
    onSearchInputFocus,
    onSearchInputBlur,
    onSearchInputKeyDown,
    onSearchInputChange,
    options,
  } = useFilterableSelect(initialOptions);

  return (
    <div>
      <InputUncontrolled
        forwardRef={inputRef}
        name={name}
        value={value}
        onChange={onSearchInputChange as (...args: any[]) => any}
        onKeyDown={onSearchInputKeyDown as (...args: any[]) => any}
        onFocus={onSearchInputFocus}
        onBlur={onSearchInputBlur}
      />
      {isFocused &&
        options.map((option) => (
          <FilterableSelectOption
            key={`filterable-select-${option.name}`}
            onSelect={onSelectOption}
            {...option}
          />
        ))}
    </div>
  );
};

export default FilterableSelectUncontrolled;
