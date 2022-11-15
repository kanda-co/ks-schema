import React, { FunctionComponent } from "react";
import type { Column } from "react-table";
import { Popover, SkeletonLoader } from "@kanda-libs/ks-design-library";
import type { ActionsHook } from "~/components/Table/useActions";
import HeaderResizer from "../HeaderResizer";
import HeaderButtonWrapper from "../HeaderButtonWrapper";
import HeaderButton from "../HeaderButton";
import useHeaderColumnProps from "./useHeaderColumnProps";
import { TableHeaderColumn } from "~/components/Table/types";

export interface HeaderColumnProps {
  isLoading?: boolean;
  handleAction?: ActionsHook;
  column: Column;
  index?: number;
  totalVisible?: number;
}

const HeaderColumn: FunctionComponent<HeaderColumnProps> = function ({
  isLoading = false,
  handleAction,
  column,
  index = 0,
  totalVisible = 0,
}) {
  const { classNames, headerProps, popoverProps, label } = useHeaderColumnProps(
    column as TableHeaderColumn,
    index,
    totalVisible
  );
  return (
    <div className={classNames.main} {...headerProps}>
      <SkeletonLoader
        isLoading={isLoading}
        wrapperClassName={classNames.loading}
        afterLoading={
          <>
            <Popover.Advanced
              {...popoverProps}
              onAction={handleAction}
              className="w-48"
              button={<HeaderButton label={label} />}
              wrapper={({ children }: { children: JSX.Element }) => (
                <HeaderButtonWrapper index={index}>
                  {children}
                </HeaderButtonWrapper>
              )}
            />
            <HeaderResizer column={column as TableHeaderColumn} />
          </>
        }
      />
    </div>
  );
};

export default HeaderColumn;
