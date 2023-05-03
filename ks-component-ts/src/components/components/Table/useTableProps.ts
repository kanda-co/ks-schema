import type { TableInstance, Row } from '../../@types/index';
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useFlexLayout,
  type IdType,
  TableOptions,
} from 'react-table';
import type { TableProps } from '.';
import { globalFilter } from './helpers/search';
import type {
  PaginationProps,
  StringIndexedObject,
} from '@kanda-libs/ks-design-library';

export interface TablePropsHook<T extends StringIndexedObject<unknown>>
  extends TableInstance<T> {
  onSearch: (value: string) => void;
  paginationProps: PaginationProps;
}

export default function useTableProps<T extends StringIndexedObject<unknown>>({
  columns,
  data,
  pageSize = 10,
}: TableProps<T>): TablePropsHook<T> {
  const table = useTable<T>(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        pageIndex: 0,
      },
      autoResetGlobalFilter: false,
      globalFilter: (
        rows: Row<T>[],
        searchKeys: IdType<T>[],
        filterValue: string,
      ) => globalFilter(rows, searchKeys, filterValue, pageSize),
    } as unknown as TableOptions<T>,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useFlexLayout,
  );

  const {
    gotoPage,
    pageCount,
    state: { pageIndex },
  } = table;

  const paginationProps: PaginationProps = {
    pageCount,
    pageIndex,
    setPage: (nextPage: number) => {
      gotoPage(nextPage);
    },
  };

  const onSearch = (search: string) => {
    table.setGlobalFilter(search);
  };

  return {
    onSearch,
    paginationProps,
    ...table,
  };
}
