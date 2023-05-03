import type { PropsWithChildren } from 'react';
import type {
  ColumnInstance,
  HeaderGroup as HeaderGroupType,
} from 'react-table';
import HeaderColumn from '../HeaderColumn';
import { CLASS_NAMES } from './constants';
import useHeaderGroupProps from './useHeaderGroupProps';

export interface HeaderGroupProps<T extends Object> {
  headerGroup: HeaderGroupType<T>;
  columns: ColumnInstance<T>[];
  isLoading?: boolean;
}

function HeaderGroup<T extends Object>({
  headerGroup,
  columns,
  isLoading,
}: PropsWithChildren<HeaderGroupProps<T>>) {
  const { headerGroupProps, headers } = useHeaderGroupProps(
    headerGroup,
    columns,
  );

  return (
    <div {...headerGroupProps} className={CLASS_NAMES.base}>
      {headers.map((column, index) => (
        <HeaderColumn
          index={index}
          label={column.render('Header')}
          isLoading={isLoading}
          {...column.getHeaderProps(column.getSortByToggleProps())}
        />
      ))}
    </div>
  );
}

export default HeaderGroup;
