import React, { FunctionComponent } from "react";
import Highlighter from "react-highlight-words";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import useItemProps from "./useItemProps";
import {
  CLASS_NAMES,
  HIGHLIGHT_PROPS,
  SEPERATOR,
  SKELETONS,
} from "./constants";
import type { ItemProps } from "../../types";

const Item: FunctionComponent<ItemProps> = function ({
  handleSelect,
  searchWords = [],
  isLoading,
  company,
}) {
  const { onSelect, address } = useItemProps({
    handleSelect,
    company,
  });

  return (
    <button type="button" className={CLASS_NAMES.container} onClick={onSelect}>
      <p className={CLASS_NAMES.title}>
        <SkeletonLoader
          {...SKELETONS.title}
          isLoading={isLoading}
          afterLoading={
            <Highlighter
              {...HIGHLIGHT_PROPS}
              searchWords={searchWords}
              textToHighlight={company?.limited_company?.company_name || ""}
            />
          }
        />
      </p>
      <div className={CLASS_NAMES.content}>
        <SkeletonLoader
          {...SKELETONS.companyNumber}
          isLoading={isLoading}
          afterLoading={
            <Highlighter
              {...HIGHLIGHT_PROPS}
              searchWords={searchWords}
              textToHighlight={company?.limited_company?.company_number || ""}
            />
          }
        />
        <span className={CLASS_NAMES.seperator}>{SEPERATOR}</span>
        <SkeletonLoader
          {...SKELETONS.address}
          isLoading={isLoading}
          afterLoading={
            <Highlighter
              {...HIGHLIGHT_PROPS}
              searchWords={searchWords}
              textToHighlight={address || ""}
            />
          }
        />
      </div>
    </button>
  );
};

export default Item;
