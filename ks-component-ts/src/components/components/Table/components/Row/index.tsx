import type { PropsWithChildren } from 'react';
import type { Row as RowType, TableRowProps } from 'react-table';
import Cell from '../Cell';
import useRowClassNames from './useRowClassNames';

export interface RowProps<T extends Object> extends TableRowProps {
  cells: RowType<T>['cells'];
  index: number;
  compact?: boolean;
  isLoading?: boolean;
}

function Row<T extends Object>({
  cells,
  index,
  compact = false,
  isLoading = false,
  ...props
}: PropsWithChildren<RowProps<T>>) {
  const classNames = useRowClassNames(index);

  return (
    <div {...props} className={compact ? classNames.compact : classNames.base}>
      {cells.map((cell, cellIndex) => (
        <Cell
          {...cell.getCellProps()}
          index={cellIndex}
          isLoading={isLoading}
          render={() => cell.render('Cell')}
          label={cell.column.Header as string}
        />
      ))}
    </div>
  );
}

export default Row;
