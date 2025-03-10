import React, { type FunctionComponent } from "react";
import { type SelectOption } from "~/field/components/Select/types";
import RadioSelect, { type RadioSelectProps } from "../../RadioSelect";

export interface SelectionModalSelectProps extends RadioSelectProps {
  /**
   * Handle close function
   */
  handleClose: () => void;
  /**
   * Name of the input required for form to work
   */
  name: string;
  /**
   * Enables multi option select
   */
  multiple?: boolean;
  /**
   * Select options
   */
  options?: SelectOption[];
}

const SelectionModalSelect: FunctionComponent<SelectionModalSelectProps> =
  function ({
    handleClose,
    name,
    multiple = false,
    options = [],
    ...restProps
  }) {
    return (
      <RadioSelect
        name={name}
        multiple={multiple}
        options={options}
        {...restProps}
        onClick={() => {
          if (!multiple) {
            handleClose();
          }
        }}
      />
    );
  };

export default SelectionModalSelect;
