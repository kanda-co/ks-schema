import type { FunctionComponent, HTMLAttributes } from "react";
import type { Cell } from "react-table";
import type { StringIndexedObject } from "~/types";
import type { PopoverButtonHoverPopoverProps } from "./Rows/PopoverButton";
import type { TableInstance } from "react-table";
import type { DraggableId } from "react-beautiful-dnd";

export interface AdvancedItem {
  action: StringIndexedObject;
  name: string;
  icon?: string;
  stopPropagation?: boolean;
}

export interface TableAction {
  type: string;
  payload: [direction: string, id: number];
}

export interface TableHeaderColumn {
  id: DraggableId;
  render: (label: string) => string;
  accessor: string;
  getHeaderProps: () => HTMLAttributes<HTMLDivElement>;
  items: AdvancedItem[];
  popoverButtons: boolean;
  search?: FunctionComponent;
  searchPlaceholder?: string;
  searchDebounceInterval?: number;
  canResize: boolean;
  isResizing: boolean;
  isVisible: boolean;
  getResizerProps: () => HTMLAttributes<HTMLDivElement>;
  Header: string;
  getToggleHiddenProps: () => HTMLAttributes<HTMLDivElement>;
}

export interface TableProps {
  onRowClicked: () => void;
  onAction: () => void;
  isValidating: boolean;
  data: any[];
  columns: TableHeaderColumn[];
  defaultColumn: TableHeaderColumn;
  isLoading: boolean;
  pageIndex: number;
  totalPages: number;
  setPage: (page: number) => void;
  hoverPopover: FunctionComponent<PopoverButtonHoverPopoverProps>;
}

export interface TableRow {
  id: number;
  index: number;
  cells: Cell[];
  getRowProps: (args: StringIndexedObject) => HTMLAttributes<HTMLDivElement>;
  original?: TableRow;
  isValidating: boolean;
}

export interface TableHook extends TableInstance {
  setColumnOrder: (order: number[]) => void;
}
