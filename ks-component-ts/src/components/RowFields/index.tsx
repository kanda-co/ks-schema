import React, { type FunctionComponent } from "react";
import useRowFieldsClassNames from "./useRowFieldsClassNames";

export interface RowFieldsProps {
  children: JSX.Element | JSX.Element[];
  leftAligned?: boolean;
  verticallyCentered?: boolean;
}

const RowFields: FunctionComponent<RowFieldsProps> = function ({
  children,
  leftAligned = false,
  verticallyCentered = false,
}) {
  const classNames = useRowFieldsClassNames(leftAligned, verticallyCentered);

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
