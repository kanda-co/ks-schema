import type { FunctionComponent } from "react";
import type { Cell } from "react-table";
import { StringIndexedObject } from "~/types";

export interface CellColumn {
  renderComponent?: {
    component?: FunctionComponent;
    props?: StringIndexedObject;
    optionalProps?: string[];
    value?: string;
  };
  subAccessors?: string[];
}

export interface TableCellProps {
  cell: Cell;
  index?: number;
  isLoading?: boolean;
  compact?: boolean;
}

export type CellPropsHookArgs = TableCellProps;
