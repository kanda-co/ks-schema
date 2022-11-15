import { useCallback } from "react";
import type { DropResult } from "react-beautiful-dnd";
import { reorder } from "~/components/Table/helpers";
import { SettingsButtonProps } from "~/components/Table/SettingsButton/types";

export type SettingsPopoverOnDragEndArgs = SettingsButtonProps;

export type SettingsPopoverOnDragEndHook = (result: DropResult) => void;

export default function useSettingsPopoverOnDragEnd({
  columns,
  setColumnOrder,
}: SettingsPopoverOnDragEndArgs): SettingsPopoverOnDragEndHook {
  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;
      const {
        source: { index: startIndex },
        destination: { index: endIndex },
      } = result;
      const columnNames = columns.map((column) => column.id);
      setColumnOrder(
        reorder(startIndex, endIndex, columnNames as unknown as number[])
      );
    },
    [columns, setColumnOrder]
  );

  return onDragEnd;
}
