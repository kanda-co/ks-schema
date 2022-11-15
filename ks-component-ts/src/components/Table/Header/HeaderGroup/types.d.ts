import type { HTMLAttributes } from "react";
import { Column } from "react-table";
import type { TableHeaderColumn } from "~/components/Table/types";
import { ActionsHook } from "~/components/Table/useActions";
import type { StringIndexedObject } from "~/types";

export interface HeaderGroup {
  headers: TableHeaderColumn[];
  getHeaderGroupProps: (props?: StringIndexedObject) => HeaderGroupProps;
}

export interface HeaderGroupProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  handleAction?: ActionsHook;
  headerGroup: Column;
  allColumns: Column[];
  setColumnOrder: (order: number[]) => void;
}
