import React, { FunctionComponent } from 'react';
import type { TableHeaderColumn } from '~/components/Table/types';
import useHeaderResizerProps from './useHeaderResizerProps';
import { CLASS_NAMES } from './constants';

export interface HeaderResizerProps {
  column: TableHeaderColumn;
}

const HeaderResizer: FunctionComponent<HeaderResizerProps> = function ({
  column,
}) {
  const { classNames, resizerProps } = useHeaderResizerProps(column);

  if (!column.canResize) {
    return <></>;
  }

  return (
    <div className={classNames.container}>
      <div className={CLASS_NAMES.borderClassName} />
      <div {...resizerProps} className={classNames.resizer} />
    </div>
  );
};

export default HeaderResizer;
