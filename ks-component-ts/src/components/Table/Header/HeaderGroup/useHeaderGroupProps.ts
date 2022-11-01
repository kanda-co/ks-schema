import type { Column } from "react-table";
import type { HeaderGroupProps } from "./types";

export interface HeaderGroupPropsHook {
  headerGroupProps: HeaderGroupProps;
  headers: Column[];
  totalVisible: number;
}

export default function useHeaderGroupProps(
  headerGroup: Column,
  allColumns: Column[]
): HeaderGroupPropsHook {
  const { headers, getHeaderGroupProps } = headerGroup;
  const headerGroupProps = getHeaderGroupProps({});

  const totalVisible = allColumns.filter((column) => column.isVisible).length;

  return {
    headerGroupProps,
    headers,
    totalVisible,
  };
}
