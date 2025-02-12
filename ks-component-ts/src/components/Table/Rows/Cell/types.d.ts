import type { FunctionComponent } from "react";
import type { Cell } from "react-table";
import { StringIndexedObject } from "~/types";
import { TableRenderComponent } from "../../types";

export interface CellColumn {
  renderComponent?: TableRenderComponent;
  subAccessors?: string[];
}

export interface TableCellProps {
  cell: Cell;
  index?: number;
  isLoading?: boolean;
  compact?: boolean;
}

export type CellPropsHookArgs = TableCellProps;
