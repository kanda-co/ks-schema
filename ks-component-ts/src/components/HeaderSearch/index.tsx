import React, { FunctionComponent } from "react";
import HeaderBase from "@kanda-libs/ks-design-library/dist/components/Header/HeaderBase";
import InputUncontrolled, {
  type InputUncontrolledProps,
} from "~/field/components/Input/InputUncontrolled";
import { DefaultFormFieldProps } from "~/field/types";
import FormTheme from "~/components/FormTheme";

export interface HeaderSearchProps
  extends DefaultFormFieldProps<InputUncontrolledProps> {
  options?: JSX.Element[];
  className?: string;
  help?: boolean;
}

const HeaderSearch: FunctionComponent<HeaderSearchProps> = function ({
  options = [],
  help = false,
  className,
  ...inputProps
}) {
  return (
    <HeaderBase className={className} help={help} options={options}>
      <div className="w-full -ml-4">
        <FormTheme variant="clean">
          <InputUncontrolled
            name="search"
            icon="search"
            iconVariant="search"
            {...inputProps}
          />
        </FormTheme>
      </div>
    </HeaderBase>
  );
};

export default HeaderSearch;
