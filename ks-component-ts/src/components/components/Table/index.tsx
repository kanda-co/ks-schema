import {
  Pagination,
  type StringIndexedObject,
} from '@kanda-libs/ks-design-library';
import type { FunctionComponent, PropsWithChildren } from 'react';
import type { Column } from 'react-table';
import HeaderGroup from './components/HeaderGroup';
import Pages from './components/Pages';
import SearchInput from './components/SearchInput';
import useTableProps from './useTableProps';

export interface TableProps<T extends StringIndexedObject<unknown>> {
  columns: Readonly<Column<T>[]>;
  data: T[];
  filter?: string;
  pageSize?: number;
  compact?: boolean;
  isLoading?: boolean;
}

export type TableFunctionComponent<
  T extends StringIndexedObject<unknown> = any,
> = FunctionComponent<TableProps<T>>;

function Table<T extends StringIndexedObject<unknown>>({
  compact = false,
  isLoading = false,
  ...props
}: PropsWithChildren<TableProps<T>>) {
  const {
    onSearch,
    page,
    prepareRow,
    columns,
    getTableProps,
    headerGroups,
    paginationProps,
  } = useTableProps(props);

  return (
    <>
      <SearchInput
        onSearch={(currentSearch) => {
          onSearch(currentSearch);
        }}
      />
      <div {...getTableProps()} className="w-full">
        <div>
          {headerGroups.map((headerGroup) => (
            <HeaderGroup
              headerGroup={headerGroup}
              columns={columns}
              isLoading={isLoading}
            />
          ))}
        </div>
        <Pages
          page={page}
          prepareRow={prepareRow}
          isLoading={isLoading}
          compact={compact}
        />
      </div>
      <div className="px-4">
        <Pagination {...paginationProps} />
      </div>
    </>
  );
}

export default Table;
