import React, { type FunctionComponent } from "react";
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
        {!visible && (
          <div
            className="mb-4 cursor-pointer text-neutral-500"
            onClick={() => {
              onClick();
            }}
          >
            + {label}
          </div>
        )}
        {visible && children}
      </div>
    );
  };

export default OptionalHiddenField;
