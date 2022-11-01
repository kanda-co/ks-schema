import React, { FunctionComponent, MutableRefObject, useMemo } from "react";
import clsx from "clsx";
import {
  CLASS_NAMES,
  DRAGGING_PROPS,
  HANDLE_ICON_PROPS,
} from "~/field/components/TableColumnOptionInput/constants";
import type { ContainerProps } from "./types";

const Container: FunctionComponent<ContainerProps> = function ({
  column,
  visibleColumns,
  provided,
  snapshot,
  children,
}) {
  const { innerRef, draggableProps, dragHandleProps } = provided;

  const { isDragging } = snapshot;

  const { Header: name, getToggleHiddenProps } = column;

  const toggleProps = getToggleHiddenProps();

  const handleProps = {
    name: column.id,
    defaultChecked: column.isVisible,
    onChange: toggleProps.onChange,
    disabled: column.isVisible && visibleColumns === 1,
  };

  const classNames = useMemo(
    () => ({
      ...CLASS_NAMES,
      container: clsx(
        CLASS_NAMES.container,
        isDragging
          ? DRAGGING_PROPS.background.dragging
          : DRAGGING_PROPS.background.static
      ),
      text: clsx(
        CLASS_NAMES.text,
        isDragging
          ? `text-${DRAGGING_PROPS.color.dragging}`
          : `text-${DRAGGING_PROPS.color.static}`
      ),
    }),
    [isDragging]
  );

  const iconProps = useMemo(
    () => ({
      ...HANDLE_ICON_PROPS,
      stroke: isDragging
        ? DRAGGING_PROPS.color.dragging
        : DRAGGING_PROPS.color.static,
    }),
    [isDragging]
  );

  return children({
    handleProps,
    name,
    innerRef: innerRef as unknown as MutableRefObject<HTMLElement>,
    draggableProps,
    dragHandleProps,
    classNames,
    iconProps,
  });
};

export default Container;
