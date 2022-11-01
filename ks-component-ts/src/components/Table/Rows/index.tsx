import React, { FunctionComponent } from "react";
import { TableRow } from "../types";
import { RowProps } from "./Row/types";
import Row from "~/components/Table/Rows/Row";

export interface RowsProps extends Omit<RowProps, "row"> {
  rows: TableRow[];
}

const Rows: FunctionComponent<RowsProps> = function ({ rows, ...rowProps }) {
  return (
    <>
      {rows.map((row) => (
        <Row key={row.id} row={row} {...rowProps} />
      ))}
    </>
  );
};

export default Rows;
