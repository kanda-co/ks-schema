import React, { type FunctionComponent } from "react";
import AddFieldButton from "../AddFieldButton";
import useOptionalHiddenField from "./useOptionalHiddenField";

export interface OptionalHiddenFieldProps {
  label: string;
  hasValue?: boolean;
  children: JSX.Element | JSX.Element[];
}

const OptionalHiddenField: FunctionComponent<OptionalHiddenFieldProps> =
  function ({ label, hasValue, children }) {
    const { visible, onClick } = useOptionalHiddenField(hasValue);

    return (
      <div>
        {!visible && <AddFieldButton label={label} onClick={onClick} />}
        {visible && children}
      </div>
    );
  };

export default OptionalHiddenField;
