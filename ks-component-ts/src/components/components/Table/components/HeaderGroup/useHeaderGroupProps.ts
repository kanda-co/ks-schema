import type {
  ColumnInstance,
  HeaderGroup,
  TableHeaderProps,
} from 'react-table';

export interface HeaderGroupPropsHook<T extends Object> {
  headers: ColumnInstance<T>[];
  headerGroupProps: TableHeaderProps;
  totalVisible: number;
}

export default function useHeaderGroupProps<T extends Object>(
  headerGroup: HeaderGroup<T>,
  columns: ColumnInstance<T>[],
): HeaderGroupPropsHook<T> {
  const { headers, getHeaderGroupProps } = headerGroup;
  const headerGroupProps = getHeaderGroupProps({});

  const totalVisible = columns.filter((column) => column.isVisible).length;

  return {
    headers,
    headerGroupProps,
    totalVisible,
  };
}
