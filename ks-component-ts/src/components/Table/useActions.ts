import { useCallback, type MouseEvent } from "react";
import type { TableAction, TableHeaderColumn } from "./types";
import { ACTIONS } from "./constants";
import { reorder } from "./helpers";

export type ActionHookHiddenColumnCallback = (values: number[]) => number[];

export interface ActionsHookArgs {
  onAction: (action: TableAction, event: MouseEvent) => void;
  setColumnOrder: (values: number[]) => void;
  allColumns: TableHeaderColumn[];
  setHiddenColumns: (callback: ActionHookHiddenColumnCallback) => void;
}

export interface ActionsHook {}

export default function useActions({
  onAction,
  setColumnOrder,
  allColumns,
  setHiddenColumns,
}: ActionsHookArgs): ActionsHook {
  /**
   * Moves column
   * @param {Number} direction
   * @param {String} id
   */
  const moveColumn = useCallback(
    (direction: string, id: number) => {
      const columnIds = allColumns.map((column) => column.id);
      const visibleColumns = allColumns.reduce((visible: number[], column) => {
        if (column.isVisible) {
          visible.push(column.id);
        }
        return visible;
      }, []);
      const initialIndex = columnIds.indexOf(id);
      const finalIndex = columnIds.indexOf(
        visibleColumns[visibleColumns.indexOf(id) + parseInt(direction, 10)]
      );
      setTimeout(() => {
        setColumnOrder(reorder(initialIndex, finalIndex, columnIds));
      }, 10);
    },
    [allColumns, setColumnOrder]
  );

  /**
   * Hides column
   * @param {String} id
   */
  const hideColumn = useCallback(
    (id: number) => {
      setHiddenColumns((hiddenColumns: number[]) => [...hiddenColumns, id]);
    },
    [setHiddenColumns]
  );

  /**
   * Method to handle action
   * @param {Object} action
   * @param {Event} event
   * @returns ref to pas to that component
   */
  return useCallback(
    (action: TableAction, event: MouseEvent) => {
      const { type, payload } = action || {};

      if (onAction) {
        onAction(action, event);
      }

      switch (type) {
        case ACTIONS.MOVE_RIGHT:
          moveColumn.apply(null, payload);
          break;

        case ACTIONS.MOVE_LEFT:
          moveColumn.apply(null, payload);
          break;

        case ACTIONS.HIDE:
          hideColumn(payload as unknown as number);
          break;

        default:
      }
    },
    [hideColumn, moveColumn, onAction]
  );
}
