import React, { type FunctionComponent } from "react";
import type { RowProps } from "./types";
import useRowProps from "~/components/Table/Rows/Row/useRowProps";
import Cell from "~/components/Table/Rows/Cell";
import { StringIndexedObject } from "~/types";
import PopoverButton from "~/components/Table/Rows/PopoverButton";

const Row: FunctionComponent<RowProps> = function ({
  row,
  hoverPopover,
  isLoading,
  ...props
}) {
  const {
    classNames,
    rowProps,
    cells,
    showButton,
    onMouseEnter,
    onMouseLeave,
  } = useRowProps({
    row,
    hoverPopover,
    ...props,
  });

  return (
    <div
      {...rowProps}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames.base}
    >
      {cells.map((cell, index) => (
        <Cell
          key={(cell as StringIndexedObject).key}
          cell={cell}
          index={index}
          isLoading={row.original?.isValidating || isLoading}
        />
      ))}

      {showButton && <PopoverButton row={row} hoverPopover={hoverPopover} />}
    </div>
  );
};

export default Row;
