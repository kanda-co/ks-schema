import React, { FunctionComponent } from 'react';
import type { HeaderGroupProps } from '~/components/Table/Header/HeaderGroup/types';
import useHeaderGroupProps from '~/components/Table/Header/HeaderGroup/useHeaderGroupProps';
import HeaderColumn from '../HeaderColumn';
import { CLASS_NAMES } from './constants';

const HeaderGroup: FunctionComponent<HeaderGroupProps> = function ({
  isLoading = false,
  handleAction,
  headerGroup,
  allColumns,
}) {
  const { headerGroupProps, headers, totalVisible } = useHeaderGroupProps(
    headerGroup,
    allColumns,
  );

  return (
    <div {...headerGroupProps} className={CLASS_NAMES.base}>
      {headers.map((column, i) => (
        <HeaderColumn
          key={column.id}
          index={i}
          column={column}
          isLoading={isLoading}
          totalVisible={totalVisible}
          handleAction={handleAction}
        />
      ))}
    </div>
  );
};

export default HeaderGroup;
