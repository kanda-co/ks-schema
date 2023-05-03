import type { StringIndexedObject } from '@kanda-libs/ks-design-library';
import type { PropsWithChildren } from 'react';
import type { Row as RowType } from 'react-table';
import Row from '../Row';

export interface PagesProps<T extends StringIndexedObject> {
  page: RowType<T>[];
  prepareRow: (row: RowType<T>) => void;
  isLoading?: boolean;
  compact?: boolean;
}

function Pages<T extends StringIndexedObject>({
  page,
  prepareRow,
  isLoading = false,
  compact = false,
}: PropsWithChildren<PagesProps<T>>) {
  return (
    <>
      {page.map((row, index) => {
        prepareRow(row);
        return (
          <Row
            {...row.getRowProps()}
            index={index}
            cells={row.cells}
            isLoading={isLoading}
            compact={compact}
          />
        );
      })}
    </>
  );
}
export default Pages;
