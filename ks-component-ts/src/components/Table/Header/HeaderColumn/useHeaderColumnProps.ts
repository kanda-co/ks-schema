import clsx from "clsx";
import { type HTMLAttributes, useMemo } from "react";
import type { TableHeaderColumn } from "~/components/Table/types";
import { CLASS_NAMES } from "./constants";
import { moveLeftItem, moveRightItem, hideColumn } from "./helpers";
import type {
  AdvancedItem,
  AdvancedProps,
} from "@kanda-libs/ks-design-library/src/components/Popover/Advanced/types";

export interface HeaderColumnPropsHook {
  classNames: {
    main: string;
    loading: string;
    wrapper: string;
  };
  headerProps: HTMLAttributes<HTMLDivElement>;
  popoverProps: Pick<
    AdvancedProps,
    | "items"
    | "right"
    | "search"
    | "searchPlaceholder"
    | "searchDebounceInterval"
  >;
  label: string;
}

export default function useHeaderColumnProps(
  column: TableHeaderColumn,
  index: number,
  totalVisible: number
): HeaderColumnPropsHook {
  const {
    id,
    render,
    getHeaderProps,
    items: originalItems = [],
    popoverButtons,
    search,
    searchPlaceholder,
    searchDebounceInterval,
  } = column;

  const additionalItems = useMemo(
    () =>
      ((totalVisible > 1 &&
        [
          originalItems?.length > 0 && {
            seperator: true,
            name: "separator",
            action: {},
          },
          index !== 0 && moveLeftItem(id),
          index !== totalVisible - 1 && moveRightItem(id),
          hideColumn(id),
        ].filter(Boolean)) ||
        []) as AdvancedItem[],
    [id, index, originalItems.length, totalVisible]
  );

  const items = useMemo(
    () => [...originalItems, ...additionalItems],
    [originalItems, additionalItems]
  );

  const classNames = {
    ...CLASS_NAMES,
    loading: clsx(
      CLASS_NAMES.loading.base,
      index === 0 ? "" : CLASS_NAMES.loading.margin
    ),
    wrapper: clsx(
      CLASS_NAMES.wrapper.padding,
      popoverButtons ? "" : CLASS_NAMES.wrapper.popover
    ),
  };

  const right = index === totalVisible - 1 && totalVisible > 1;

  const popoverProps = {
    items,
    right,
    search,
    searchPlaceholder,
    searchDebounceInterval,
  };

  return {
    classNames,
    headerProps: getHeaderProps(),
    popoverProps,
    label: render("Header"),
  };
}
