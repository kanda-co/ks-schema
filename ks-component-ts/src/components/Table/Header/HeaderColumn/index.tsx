import React, { FunctionComponent } from "react";
import { Popover, SkeletonLoader } from "@kanda-libs/ks-design-library";
import type { TableHeaderColumn } from "~/components/Table/types";
import HeaderResizer from "../HeaderResizer";
import HeaderButtonWrapper from "../HeaderButtonWrapper";
import HeaderButton from "../HeaderButton";
import useHeaderColumnProps from "./useHeaderColumnProps";

export interface HeaderColumnProps {
  isLoading?: boolean;
  handleAction?: () => void;
  column: TableHeaderColumn;
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
    column,
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
            <HeaderResizer column={column} />~
          </>
        }
      />
    </div>
  );
};

export default HeaderColumn;
