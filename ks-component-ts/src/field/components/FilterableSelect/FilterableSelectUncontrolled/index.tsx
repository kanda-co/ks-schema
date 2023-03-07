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
  const { value, onSearchInputChange, options } =
    useFilterableSelect(initialOptions);

  return (
    <div>
      <InputUncontrolled
        name={name}
        value={value}
        onChange={onSearchInputChange as (...args: any[]) => any}
      />
      {options.map((option) => (
        <FilterableSelectOption
          key={`filterable-select-${option.name}`}
          {...option}
        />
      ))}
    </div>
  );
};

export default FilterableSelectUncontrolled;
