import React, { type FunctionComponent } from "react";
import { CLASS_NAMES, LEFT_ALIGNED_CLASS_NAMES } from "./constants";

export interface RowFieldsProps {
  children: JSX.Element[];
  leftAligned?: boolean;
}

const RowFields: FunctionComponent<RowFieldsProps> = function ({
  children,
  leftAligned = false,
}) {
  const classNames = leftAligned ? LEFT_ALIGNED_CLASS_NAMES : CLASS_NAMES;

  return (
    <div className={classNames.container}>
      {children.map((field, index) => (
        <div className={classNames.field} key={String(index)}>
          {field}
        </div>
      ))}
    </div>
  );
};

export default RowFields;
