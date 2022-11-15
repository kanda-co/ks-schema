import type { TableRow } from "~/components/Table/types";
import type { Row } from "react-table";
import type { FunctionComponent, MouseEvent } from "react";
import type { PopoverButtonHoverPopoverProps } from "~/components/Table/Rows/PopoverButton";

export interface RowProps {
  isLoading?: boolean;
  onRowClicked?: (row: Row, e: MouseEvent) => void;
  row: Row;
  prepareRow: (row: Row) => void;
  hoverPopover: FunctionComponent<PopoverButtonHoverPopoverProps>;
}
