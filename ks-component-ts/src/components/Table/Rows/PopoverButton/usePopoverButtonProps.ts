import type { TableRow } from "~/components/Table/types";

export interface PopoverButtonPropsHook {
  id: string;
  right: boolean;
  above: boolean;
}

export default function usePopoverButtonProps(
  row: TableRow
): PopoverButtonPropsHook {
  const { index } = row;

  return {
    id: `table-row-popover-${index}`,
    right: true,
    above: index >= 6,
  };
}
