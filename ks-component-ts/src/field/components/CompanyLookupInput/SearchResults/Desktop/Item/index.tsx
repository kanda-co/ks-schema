import React, { FunctionComponent } from "react";
import Highlighter from "react-highlight-words";
import { ItemProps } from "field/components/CompanyLookupInput/SearchResults/Desktop/Item/types";
import useItemProps from "field/components/CompanyLookupInput/SearchResults/Desktop/Item/useItemProps";
import {
  CLASS_NAMES,
  HIGHLIGHT_PROPS,
  SEPERATOR,
  SKELETONS,
} from "field/components/CompanyLookupInput/SearchResults/Desktop/Item/constants";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";

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
              textToHighlight={company?.companyName || ""}
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
              textToHighlight={company?.companyNumber || ""}
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
