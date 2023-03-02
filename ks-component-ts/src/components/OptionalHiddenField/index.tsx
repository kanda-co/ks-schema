import React, { type FunctionComponent } from "react";
import AddFieldButton from "../AddFieldButton";
import useOptionalHiddenField from "./useOptionalHiddenField";

export interface OptionalHiddenFieldProps {
  label: string;
  children: JSX.Element | JSX.Element[];
}

const OptionalHiddenField: FunctionComponent<OptionalHiddenFieldProps> =
  function ({ label, children }) {
    const { visible, onClick } = useOptionalHiddenField();

    return (
      <div>
        {!visible && <AddFieldButton label={label} onClick={onClick} />}
        {visible && children}
      </div>
    );
  };

export default OptionalHiddenField;
