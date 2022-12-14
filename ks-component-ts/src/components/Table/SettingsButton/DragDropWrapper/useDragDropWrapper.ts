import { TableHeaderColumn } from "~/components/Table/types";
import { DroppableProvided, DroppableProvidedProps } from "react-beautiful-dnd";
import { HTMLAttributes, MutableRefObject, ReactNode } from "react";

export interface DragDropWrapperHook {
  visibleColumns: number;
  droppableProps: DroppableProvidedProps;
  innerRef: MutableRefObject<HTMLElement>;
  placeholder: ReactNode;
}

export default function useDragDropWrapper(
  columns: TableHeaderColumn[],
  provided: DroppableProvided
): DragDropWrapperHook {
  const visibleColumns = columns.reduce(
    (total, column) => (column.isVisible ? total + 1 : total),
    0
  );
  const { droppableProps, innerRef, placeholder } = provided;

  return {
    visibleColumns,
    droppableProps,
    innerRef: innerRef as unknown as MutableRefObject<HTMLElement>,
    placeholder,
  };
}
