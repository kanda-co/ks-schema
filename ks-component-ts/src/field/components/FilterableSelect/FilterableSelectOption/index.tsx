import React, { type FunctionComponent, type MouseEvent } from "react";
import { Text } from "@kanda-libs/ks-design-library";
import { SelectOption } from "../../Select/types";
import { CLASS_NAMES } from "./constants";
import clsx from "clsx";

export interface FilterableSelectOptionProps extends SelectOption {
  isFocused: boolean;
  onSelect: (name: string) => void;
}

const FilterableSelectOption: FunctionComponent<FilterableSelectOptionProps> =
  function ({ name, isFocused, onSelect }) {
    return (
      <div
        className={clsx(
          CLASS_NAMES.wrapper,
          isFocused ? CLASS_NAMES.wrapperFocused : ""
        )}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          onSelect(name);
        }}
      >
        <Text text={name} className={CLASS_NAMES.text} />
      </div>
    );
  };

export default FilterableSelectOption;
