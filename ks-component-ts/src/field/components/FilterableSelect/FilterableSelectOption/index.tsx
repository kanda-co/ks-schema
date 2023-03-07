import React, { type FunctionComponent } from "react";
import { SelectOption } from "../../Select/types";

export type FilterableSelectOptionProps = SelectOption;

const FilterableSelectOption: FunctionComponent<FilterableSelectOptionProps> =
  function ({ name, value }) {
    return <div>{name}</div>;
  };

export default FilterableSelectOption;
