import type { TableRow } from "~/components/Table/types";

export interface PopoverButtonPropsHook {
  right: boolean;
  above: boolean;
}

export default function usePopoverButtonProps(
  row: TableRow
): PopoverButtonPropsHook {
  const { index } = row;

  return {
    right: true,
    above: index >= 6,
  };
}
