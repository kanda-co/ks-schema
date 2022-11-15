import React, { FunctionComponent } from "react";
import type {
  HeaderGroupProps,
  HeaderGroup as HeaderGroupType,
} from "~/components/Table/Header/HeaderGroup/types";
import useHeaderGroupProps from "~/components/Table/Header/HeaderGroup/useHeaderGroupProps";
import HeaderColumn from "../HeaderColumn";
import { CLASS_NAMES } from "./constants";
import { TableColumn } from "~/components/Table/types";

const HeaderGroup: FunctionComponent<HeaderGroupProps> = function ({
  isLoading = false,
  handleAction,
  headerGroup,
  allColumns,
}) {
  const { headerGroupProps, headers, totalVisible } = useHeaderGroupProps(
    headerGroup as unknown as HeaderGroupType,
    allColumns as unknown as TableColumn[]
  );

  return (
    <div {...headerGroupProps} className={CLASS_NAMES.base}>
      {headers.map((column, i) => (
        <HeaderColumn
          key={column.id}
          index={i}
          column={column}
          isLoading={isLoading}
          totalVisible={totalVisible}
          handleAction={handleAction}
        />
      ))}
    </div>
  );
};

export default HeaderGroup;
