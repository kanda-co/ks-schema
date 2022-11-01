import { TableRow } from "~/components/Table/types";
import { FunctionComponent, MouseEvent } from "react";
import { PopoverButtonHoverPopoverProps } from "~/components/Table/Rows/PopoverButton";

export interface RowProps {
  isLoading?: boolean;
  onRowClicked?: (row: TableRow, e: MouseEvent) => void;
  row: TableRow;
  prepareRow: (row: TableRow) => void;
  hoverPopover: FunctionComponent<PopoverButtonHoverPopoverProps>;
}
