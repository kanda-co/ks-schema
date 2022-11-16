import React, { type FunctionComponent } from "react";
import { Card, SkeletonLoader } from "@kanda-libs/ks-design-library";
import Highlighter from "react-highlight-words";
import type { ItemProps } from "../../types";
import useItemProps from "./useItemProps";
import { HIGHLIGHT_PROPS, SKELETONS, TEXT_CLASSNAMES } from "./constants";

const Item: FunctionComponent<ItemProps> = function ({
  isLoading,
  company,
  searchWords = [],
  handleSelect,
}) {
  const { className, onSelect, address } = useItemProps({
    handleSelect,
    company,
    isLoading,
  });

  return (
    <Card
      onClick={onSelect}
      className={className}
      title={
        <SkeletonLoader
          {...SKELETONS.title}
          isLoading={isLoading}
          afterLoading={
            <Highlighter
              {...HIGHLIGHT_PROPS}
              searchWords={searchWords}
              textToHighlight={company?.companyName}
              className={TEXT_CLASSNAMES.title}
            />
          }
        />
      }
      footer={
        <SkeletonLoader
          {...SKELETONS.footer}
          isLoading={isLoading}
          afterLoading={
            <Highlighter
              {...HIGHLIGHT_PROPS}
              searchWords={searchWords}
              textToHighlight={company?.companyNumber}
              className={TEXT_CLASSNAMES.footer}
            />
          }
        />
      }
    >
      <SkeletonLoader
        {...SKELETONS.description}
        isLoading={isLoading}
        afterLoading={
          <Highlighter
            {...HIGHLIGHT_PROPS}
            searchWords={searchWords}
            textToHighlight={address}
            className={TEXT_CLASSNAMES.body}
          />
        }
      />
    </Card>
  );
};

export default Item;
