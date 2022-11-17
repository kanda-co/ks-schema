import React, { type FunctionComponent } from "react";
import { Uncontrolled } from "~/field/components/Input";
import FormTheme from "~/components/FormTheme";
import { CLASS_NAMES } from "./constants";

export interface SearchProps {
  /**
   * Text that would be displayed when there is no value
   */
  placeholder?: string | JSX.Element;
  /**
   * Default value of input
   */
  defaultValue?: any;
  /**
   * This function is triggered when the input is changed
   */
  onChange?: () => void;
  /**
   * This function is triggered when the input is unfocused
   */
  onBlur?: () => void;
  /**
   * HTML id
   */
  name?: string;
}

const Search: FunctionComponent<SearchProps> = function (props) {
  return (
    <div className={CLASS_NAMES.container}>
      <FormTheme variant="inline">
        <Uncontrolled {...props} />
      </FormTheme>
    </div>
  );
};

export default Search;
