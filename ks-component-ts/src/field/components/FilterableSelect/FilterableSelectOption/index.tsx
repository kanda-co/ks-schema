import React, { type FunctionComponent, type MouseEvent } from "react";
import { SelectOption } from "../../Select/types";

export interface FilterableSelectOptionProps extends SelectOption {
  onSelect: (name: string) => void;
}

const FilterableSelectOption: FunctionComponent<FilterableSelectOptionProps> =
  function ({ name, onSelect }) {
    return (
      <div
        className="cursor-pointer"
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          onSelect(name);
        }}
      >
        {name}
      </div>
    );
  };

export default FilterableSelectOption;
