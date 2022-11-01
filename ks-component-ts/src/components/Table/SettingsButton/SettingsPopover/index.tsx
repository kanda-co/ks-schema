import React, { FunctionComponent } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useSettingsPopoverOnDragEnd from "./useSettingsPopoverOnDragEnd";
import { CLASS_NAMES, HEADING_TEXT, DROP_ID } from "./constants";
import DragDropWrapper from "~/components/Table/SettingsButton/DragDropWrapper";
import { SettingsButtonProps } from "~/components/Table/SettingsButton/types";

export type SettingsPopoverProps = SettingsButtonProps;

const SettingsPopover: FunctionComponent<SettingsPopoverProps> = function ({
  columns,
  setColumnOrder,
}) {
  const onDragEnd = useSettingsPopoverOnDragEnd({ columns, setColumnOrder });

  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.heading.container}>
        <span className={CLASS_NAMES.heading.text}>{HEADING_TEXT}</span>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={DROP_ID}>
          {(provided, snapshot) => (
            <DragDropWrapper
              provided={provided}
              snapshot={snapshot}
              columns={columns}
            />
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SettingsPopover;
