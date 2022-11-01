import type { FunctionComponent, HTMLAttributes } from "react";
import { StringIndexedObject } from "~/types";

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
  id: number;
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
}

export interface TableProps {
  onRowClicked: () => void;
  onAction: () => void;
  isValidating: boolean;
  data: any[];
  columns: TableHeaderColumn[];
  defaultColumn: TableHeaderColumn;
  isLoading: boolean;
}

export interface TableRow {
  index: number;
}
