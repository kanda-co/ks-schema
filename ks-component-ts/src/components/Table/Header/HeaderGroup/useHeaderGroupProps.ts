import type { HeaderGroupProps } from "./types";
import { HeaderGroup } from "./types";
import { TableColumn } from "~/components/Table/types";

export interface HeaderGroupPropsHook {
  headerGroupProps: HeaderGroupProps;
  headers: TableColumn[];
  totalVisible: number;
}

export default function useHeaderGroupProps(
  headerGroup: HeaderGroup,
  allColumns: TableColumn[]
): HeaderGroupPropsHook {
  const { headers = [], getHeaderGroupProps } = headerGroup;
  const headerGroupProps = getHeaderGroupProps({});

  const totalVisible = allColumns.filter((column) => column.isVisible).length;

  return {
    headerGroupProps,
    headers,
    totalVisible,
  };
}
