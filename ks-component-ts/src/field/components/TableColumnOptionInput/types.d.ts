import {
  DraggableProvided,
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
  DraggableStateSnapshot,
  DragHandleProps,
} from "react-beautiful-dnd";
import { HandleProps } from "~/components/Handle/types";
import { MutableRefObject } from "react";
import { TableHeaderColumn } from "~/components/Table/types";
import type { IconProps } from "@kanda-libs/ks-design-library";

export interface TableColumnOptionInputProps {
  column: TableHeaderColumn;
  index: number;
  visibleColumns: number;
}

export interface ContainerChildrenArgs {
  handleProps: Partial<HandleProps>;
  name: string;
  innerRef: MutableRefObject<HTMLElement>;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: ?DragHandleProps;
  classNames: {
    container: string;
    text: string;
    checkbox: {
      container: string;
      margin: string;
    };
    dragHandle: string;
  };
  iconProps: IconProps;
}

export interface ContainerProps
  extends Omit<TableColumnOptionInputProps, "index"> {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  children: (args: ContainerChildrenArgs) => JSX.Element;
}
