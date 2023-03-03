import React, { type FunctionComponent } from "react";
import { CLASS_NAMES, LEFT_ALIGNED_CLASS_NAMES } from "./constants";

export interface RowFieldsProps {
  children: JSX.Element | JSX.Element[];
  leftAligned?: boolean;
}

const RowFields: FunctionComponent<RowFieldsProps> = function ({
  children,
  leftAligned = false,
}) {
  const classNames = leftAligned ? LEFT_ALIGNED_CLASS_NAMES : CLASS_NAMES;
  const items =
    (children as JSX.Element[]).length > 1
      ? (children as JSX.Element[])
      : [children];

  return (
    <div className={classNames.container}>
      {items.map((field, index) => (
        <div className={classNames.field} key={String(index)}>
          {field}
        </div>
      ))}
    </div>
  );
};

export default RowFields;
