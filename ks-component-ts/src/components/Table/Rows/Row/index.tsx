import React, { FunctionComponent } from 'react';
import type { StringIndexedObject } from '~/types';

export interface RowProps {
  isLoading?: boolean;
  onRowClicked?: (row: StringIndexedObject, e: MouseEvent) => void;
}

const Row: FunctionComponent<RowProps> = function ({}) {
  return <></>;
};

export default Row;
