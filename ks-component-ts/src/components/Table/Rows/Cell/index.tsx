import React, { type FunctionComponent } from "react";
import type { TableCellProps } from "./types";
import useCellProps from "~/components/Table/Rows/Cell/useCellProps";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";

const Cell: FunctionComponent<TableCellProps> = function ({
  isLoading,
  ...props
}) {
  const {
    cellProps,
    classNames,
    value,
    render,
    renderComponent: RenderComponent,
    renderProps,
  } = useCellProps({
    isLoading,
    ...props,
  });

  return (
    <div {...cellProps} className={classNames.cell}>
      <div className={classNames.container}>
        <div className={classNames.render}>
          <SkeletonLoader
            isLoading={isLoading}
            afterLoading={render ? <RenderComponent {...renderProps} /> : value}
          />
        </div>
      </div>
    </div>
  );
};

export default Cell;
