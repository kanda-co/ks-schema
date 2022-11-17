import React, { type FunctionComponent } from "react";
import { CLASS_NAMES } from "./constants";

export interface RowFieldsProps {
  children: JSX.Element[];
}

const RowFields: FunctionComponent<RowFieldsProps> = function ({ children }) {
  return (
    <div className={CLASS_NAMES.container}>
      {children.map((field, index) => (
        <div className={CLASS_NAMES.field} key={String(index)}>
          {field}
        </div>
      ))}
    </div>
  );
};

export default RowFields;
