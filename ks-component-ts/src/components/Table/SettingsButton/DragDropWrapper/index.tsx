import React, { type FunctionComponent, MutableRefObject } from "react";
import { DragDropWrapperProps } from "~/components/Table/SettingsButton/DragDropWrapper/types";
import useDragDropWrapper from "~/components/Table/SettingsButton/DragDropWrapper/useDragDropWrapper";
import TableColumnOptionInput from "~/field/components/TableColumnOptionInput";

const DragDropWrapper: FunctionComponent<DragDropWrapperProps> = function ({
  columns,
  provided,
}) {
  const { droppableProps, innerRef, placeholder, visibleColumns } =
    useDragDropWrapper(columns, provided);

  return (
    <div {...droppableProps} ref={innerRef as MutableRefObject<HTMLDivElement>}>
      {columns.map((column, index) => (
        <TableColumnOptionInput
          key={column.id}
          column={column}
          index={index}
          visibleColumns={visibleColumns}
        />
      ))}
      {placeholder}
    </div>
  );
};

export default DragDropWrapper;
