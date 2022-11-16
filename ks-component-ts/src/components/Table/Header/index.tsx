import React, { type FunctionComponent } from "react";
import HeaderGroup from "./HeaderGroup";
import type { HeaderGroupProps } from "./HeaderGroup/types";
import type { Column } from "react-table";

export interface HeaderProps extends Omit<HeaderGroupProps, "headerGroup"> {
  headerGroups: Column[];
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
