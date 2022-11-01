import { useMemo } from "react";
import {
  useTable,
  useColumnOrder,
  useResizeColumns,
  useFlexLayout,
  type Column,
  type TableProps,
} from "react-table";
import { useClasses } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES } from "./constants";
import { generatePlaceholderData } from "./helpers";
import useActions, { ActionHookHiddenColumnCallback } from "./useActions";
import type { TableHook } from "./types";
import type {
  TableHeaderColumn,
  TableProps as DefaultTableProps,
} from "./types";

export type TablePropsHookArgs = Omit<DefaultTableProps, "onRowClicked">;

export interface TablePropsHook {
  tableProps: TableProps;
}

export default function useTableProps({
  data: dataInput,
  columns,
  isLoading,
  isValidating,
  defaultColumn: defaultColumnInput,
  pageIndex,
  totalPages,
  setPage,
  hoverPopover,
  onAction,
}: TablePropsHookArgs): TablePropsHook {
  const defaultColumn = useMemo(() => {
    if (defaultColumnInput) return defaultColumnInput;
    const width = Math.ceil(1024 / columns.length);
    const maxWidth = width + 100;
    return {
      minWidth: 80,
      width,
      maxWidth,
    };
  }, [columns, defaultColumnInput]);

  const data = useMemo(() => {
    if (isLoading) return generatePlaceholderData(columns);

    if (isValidating)
      return [{ reference: "skeleton", isValidating: true }, ...dataInput];

    return dataInput;
  }, [isLoading, columns, isValidating, dataInput]);

  const {
    allColumns,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
    setHiddenColumns,
  } = useTable(
    {
      columns: columns as unknown as Column<object>[],
      data,
      defaultColumn: defaultColumn as unknown as Column<object>,
    },
    useColumnOrder,
    useResizeColumns,
    useFlexLayout
  ) as TableHook;

  const tableProps = getTableProps();

  const paginationProps = {
    pageCount: totalPages,
    pageIndex,
    setPage,
  };

  const classNames = useClasses(CLASS_NAMES, {
    table: [".tableBase", isLoading ? "overflow-x-hidden" : "overflow-x-auto"],
  });

  const handleAction = useActions({
    onAction,
    setColumnOrder,
    allColumns: allColumns as unknown as TableHeaderColumn[],
    setHiddenColumns: setHiddenColumns as unknown as (
      callback: ActionHookHiddenColumnCallback
    ) => void,
  });

  return {
    tableProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    setColumnOrder,
    showPagination: totalPages > 1 && !isLoading,
    paginationProps,
    isLoading: isLoading || false,
    hoverPopover,
    classNames,
    handleAction,
  };
}
