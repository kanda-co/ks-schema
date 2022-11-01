import React, { FunctionComponent } from 'react';
import HeaderGroup from './HeaderGroup';
import type {
  HeaderGroup as HeaderGroupType,
  HeaderGroupProps,
} from './HeaderGroup/types';

export interface HeaderProps extends Omit<HeaderGroupProps, 'headerGroup'> {
  headerGroups: HeaderGroupType[];
}

const Header: FunctionComponent<HeaderProps> = function ({
  headerGroups,
  ...props
}) {
  return (
    <>
      {headerGroups.map((headerGroup, index) => (
        <HeaderGroup key={String(index)} headerGroup={headerGroup} {...props} />
      ))}
    </>
  );
};

export default Header;
