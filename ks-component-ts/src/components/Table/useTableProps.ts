import { FunctionComponent, useMemo } from "react";
import {
  useTable,
  useColumnOrder,
  useResizeColumns,
  useFlexLayout,
  type Column,
  type TableProps,
  type Row,
} from "react-table";
import { useClasses } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES } from "./constants";
import { generatePlaceholderData } from "./helpers";
import useActions, {
  type ActionHookHiddenColumnCallback,
  type ActionsHook,
} from "./useActions";
import type { TableHook } from "./types";
import type {
  TableHeaderColumn,
  TableProps as DefaultTableProps,
} from "./types";
import type { PopoverButtonHoverPopoverProps } from "./Rows/PopoverButton";
import { StringIndexedObject } from "~/types";

export type TablePropsHookArgs = Omit<DefaultTableProps, "onRowClicked">;

export interface TablePropsHook {
  tableProps: TableProps;
  headerGroups: Column[];
  rows: Row[];
  prepareRow: (row: Row) => void;
  allColumns: Column[];
  setColumnOrder: (order: number[]) => void;
  showPagination: boolean;
  isLoading: boolean;
  paginationProps: {
    pageCount: number;
    pageIndex: number;
    setPage: (page: number) => void;
  };
  hoverPopover: FunctionComponent<PopoverButtonHoverPopoverProps>;
  classNames: StringIndexedObject;
  handleAction: ActionsHook;
}

export default function useTableProps({
  data: dataInput = [],
  columns = [],
  isLoading,
  isValidating = false,
  defaultColumn: defaultColumnInput,
  pageIndex,
  totalPages,
  setPage,
  hoverPopover = null,
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
    isLoading: isLoading || false,
    paginationProps,
    hoverPopover:
      hoverPopover as FunctionComponent<PopoverButtonHoverPopoverProps>,
    classNames,
    handleAction,
  };
}
