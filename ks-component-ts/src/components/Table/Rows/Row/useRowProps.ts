import type { MouseEvent, HTMLAttributes } from "react";
import { useCallback, useState } from "react";
import { CLASS_NAMES } from "./constants";
import { useClasses } from "@kanda-libs/ks-design-library";
import type { StringIndexedObject } from "~/types";
import type { Cell } from "react-table";
import type { RowProps } from "./types";
import { RowPropGetter } from "react-table";

export type RowPropsHookArgs = RowProps;

export interface RowPropsHook {
  classNames: StringIndexedObject;
  rowProps: HTMLAttributes<HTMLDivElement>;
  cells: Cell[];
  showButton: boolean;
  onMouseEnter: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
}

export default function useRowProps({
  row,
  prepareRow,
  hoverPopover,
  onRowClicked,
  rowClassName,
}: RowPropsHookArgs): RowPropsHook {
  /**
   * handles row click
   */
  const handleClick = (e: MouseEvent) => onRowClicked && onRowClicked(row, e);

  prepareRow(row);

  const { cells, getRowProps, index } = row;

  const rowProps = getRowProps({
    onClick: handleClick,
  } as RowPropGetter<object>);

  const [showButton, setShowButton] = useState(false);
  const [delayHandler, setDelayHandler] = useState<NodeJS.Timeout | null>(null);

  const classNames = useClasses(
    {
      ...CLASS_NAMES,
      base: [CLASS_NAMES.base, rowClassName].filter(Boolean).join(" "),
    },
    {
      base: [".base", index === 9 ? "" : ".border", ".hover"],
      button: [".button"],
    }
  );

  const outputCells = cells.map((cell) => ({
    ...cell,
    key: `${cell.column.Header}-row-${cell.row.id}`,
  }));

  const onMouseEnter = useCallback(() => {
    if (!hoverPopover) return;
    setDelayHandler(setTimeout(() => setShowButton(true), 50));
  }, [hoverPopover]);

  const onMouseLeave = useCallback(() => {
    clearTimeout(delayHandler as NodeJS.Timeout);
    if (!hoverPopover) return;
    if (!showButton) return;
    setShowButton(false);
  }, [hoverPopover, delayHandler, showButton]);

  return {
    classNames,
    rowProps,
    cells: outputCells,
    showButton,
    onMouseEnter,
    onMouseLeave,
  };
}
