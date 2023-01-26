import React, { type FunctionComponent, type MutableRefObject } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Icon } from "@kanda-libs/ks-design-library";
import Handle from "~/components/Handle";
import Container from "./Container";
import type { TableColumnOptionInputProps } from "./types";

export type { TableColumnOptionInputProps };

const TableColumnOptionInput: FunctionComponent<TableColumnOptionInputProps> =
  function ({ column, index, ...props }) {
    return (
      <Draggable draggableId={column.id as string} index={index}>
        {(provided, snapshot) => (
          <Container
            provided={provided}
            snapshot={snapshot}
            column={column}
            {...props}
          >
            {({
              handleProps,
              name,
              innerRef,
              draggableProps,
              dragHandleProps,
              classNames,
              iconProps,
            }) => (
              <div
                ref={innerRef as MutableRefObject<HTMLDivElement>}
                className={classNames.container}
                {...draggableProps}
              >
                <div className={classNames.checkbox.container}>
                  <div className={classNames.checkbox.margin}>
                    <Handle.Checkbox {...handleProps} />
                  </div>
                  <span className={classNames.text}>{name}</span>
                </div>
                <div {...dragHandleProps} className={classNames.dragHandle}>
                  <Icon {...iconProps} />
                </div>
              </div>
            )}
          </Container>
        )}
      </Draggable>
    );
  };

export default TableColumnOptionInput;
