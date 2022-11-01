import {
  DraggableProvided,
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { HandleProps } from "~/components/Handle/types";
import { MutableRefObject } from "react";
import { IconProps } from "@kanda-libs/ks-design-library/dist/components/Icon";

export interface TableColumnOptionInputColumn {
  id: string;
  isVisible: boolean;
  Header: string;
  getToggleHiddenProps: () => HTMLAttributes<HTMLDivElement>;
}

export interface TableColumnOptionInputProps {
  column: TableColumnOptionInputColumn;
  index: number;
  visibleColumns: number;
}

export interface ContainerChildrenArgs {
  handleProps: Partial<HandleProps>;
  name: string;
  innerRef: MutableRefObject<HTMLElement>;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | undefined;
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
