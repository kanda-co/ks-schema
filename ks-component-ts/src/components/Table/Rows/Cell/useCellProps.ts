import clsx from "clsx";
import type { FunctionComponent } from "react";
import type { TableCellProps } from "react-table";
import { createOptionalProps } from "./helpers";
import { CLASS_NAMES } from "./constants";
import type { CellColumn, CellPropsHookArgs } from "./types";
import { StringIndexedObject } from "~/types";

export interface CellPropsHook {
  cellProps: TableCellProps;
  classNames: {
    cell: string;
    container: string;
    render: string;
  };
  value: string;
  render: boolean;
  renderComponent: FunctionComponent<any>;
  renderProps?: StringIndexedObject;
}

export default function useCellProps({
  cell,
  index,
  isLoading,
  compact = false,
}: CellPropsHookArgs): CellPropsHook {
  const {
    getCellProps,
    value,
    column,
    row: { original },
  } = cell;

  const { renderComponent, subAccessors } = column as unknown as CellColumn;

  const render =
    renderComponent && !isLoading
      ? !!(renderComponent.component && renderComponent.value)
      : false;

  const props = renderComponent
    ? {
        ...(renderComponent?.props || {}),
        ...(renderComponent?.value ? { [renderComponent?.value]: value } : {}),
        ...createOptionalProps(
          subAccessors as string[],
          original,
          renderComponent.optionalProps as string[]
        ),
      }
    : {};

  const classNames = {
    cell: clsx(
      compact ? CLASS_NAMES.cell.compact : CLASS_NAMES.cell.base,
      index === 0 ? "" : CLASS_NAMES.cell.padding
    ),
    container: CLASS_NAMES.container,
    render: isLoading ? CLASS_NAMES.renderLoading : CLASS_NAMES.render,
  };

  return {
    cellProps: getCellProps(),
    classNames,
    value,
    render,
    renderComponent: renderComponent?.component as FunctionComponent<any>,
    renderProps: props,
  };
}
