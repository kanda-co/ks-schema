import React, { type FunctionComponent } from "react";
import { TableProps } from "./types";
import useTableProps from "~/components/Table/useTableProps";
import SettingsButton from "~/components/Table/SettingsButton";
import Header from "~/components/Table/Header";
import Rows from "~/components/Table/Rows";
import { Pagination } from "@kanda-libs/ks-design-library";

const Table: FunctionComponent<TableProps> = function ({
  onRowClicked,
  compact = false,
  ...props
}) {
  const {
    tableProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    setColumnOrder,
    showPagination,
    paginationProps,
    isLoading,
    hoverPopover,
    classNames,
    handleAction,
  } = useTableProps(props);

  return (
    <div className={classNames.wrapper}>
      {!isLoading && (
        <SettingsButton columns={allColumns} setColumnOrder={setColumnOrder} />
      )}
      <div className={classNames.table}>
        <div className={classNames.padding}>
          <div {...tableProps}>
            <Header
              headerGroups={headerGroups}
              isLoading={isLoading}
              allColumns={allColumns}
              setColumnOrder={setColumnOrder}
              handleAction={handleAction}
            />
            <Rows
              rows={rows}
              prepareRow={prepareRow}
              isLoading={isLoading}
              hoverPopover={hoverPopover}
              onRowClicked={onRowClicked}
              compact={compact}
            />
          </div>
        </div>
      </div>
      {showPagination && (
        <div className={classNames.pagination}>
          <Pagination {...paginationProps} />
        </div>
      )}
    </div>
  );
};

export default Table;
