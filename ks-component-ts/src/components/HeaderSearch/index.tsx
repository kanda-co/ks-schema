import React, { type FunctionComponent } from "react";
import { Header } from "@kanda-libs/ks-design-library";
import InputUncontrolled, {
  type InputUncontrolledProps,
} from "~/field/components/Input/InputUncontrolled";
import { DefaultFormFieldProps } from "~/field/types";
import FormTheme from "~/components/FormTheme";
import { useFormContext } from "react-hook-form";

export interface HeaderSearchProps
  extends DefaultFormFieldProps<InputUncontrolledProps> {
  options?: JSX.Element[];
  className?: string;
  help?: boolean;
  hideNumber?: boolean;
  searchName?: string;
}

const HeaderSearch: FunctionComponent<HeaderSearchProps> = function ({
  options = [],
  help = false,
  hideNumber = true,
  className,
  searchName = "search",
  ...inputProps
}) {
  return (
    <Header.Base
      className={className}
      help={help}
      hideNumber={hideNumber}
      options={options}
    >
      <div className="w-full -ml-4">
        <FormTheme variant="clean">
          <InputUncontrolled
            name={searchName}
            icon="search"
            iconVariant="search"
            {...inputProps}
          />
        </FormTheme>
      </div>
    </Header.Base>
  );
};

export default HeaderSearch;
