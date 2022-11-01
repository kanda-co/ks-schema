import type { StringIndexedObject } from '~/types';
import type { TableHeaderColumn } from '~/components/Table/types';
import type { HTMLAttributes } from 'react';

export interface HeaderGroup {
  headers: TableHeaderColumn[];
  getHeaderGroupProps: (props?: StringIndexedObject) => HeaderGroupProps;
}

export interface HeaderGroupProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  handleAction?: () => void;
  headerGroup: HeaderGroup;
  allColumns: TableHeaderColumn[];
}
