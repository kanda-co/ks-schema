import React, { type FunctionComponent, type MouseEvent } from "react";
import { SelectOption } from "../../Select/types";
import { CLASS_NAMES } from "./constants";
import clsx from "clsx";
import Highlighter from "react-highlight-words";

export interface FilterableSelectOptionProps extends SelectOption {
  searchWords: string[];
  isFocused: boolean;
  onSelect: (name: string) => void;
}

const FilterableSelectOption: FunctionComponent<FilterableSelectOptionProps> =
  function ({ name, searchWords, isFocused, onSelect }) {
    return (
      <div
        className={clsx(
          CLASS_NAMES.wrapper,
          isFocused ? CLASS_NAMES.wrapperFocused : ""
        )}
        onMouseDown={(e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          onSelect(name);
        }}
      >
        <Highlighter
          autoEscape
          className={CLASS_NAMES.text}
          searchWords={searchWords}
          textToHighlight={name}
        />
      </div>
    );
  };

export default FilterableSelectOption;
