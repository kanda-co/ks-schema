import React, { type FunctionComponent } from "react";
import RichTextInputStyleButton from "../RichTextInputStyleButton";
import { getMenuStyle } from "./helpers";

export interface RichTextInputMenuProps {
  selectionPosition: { x: number; y: number };
}

const RichTextInputMenu: FunctionComponent<RichTextInputMenuProps> = function ({
  selectionPosition,
}) {
  // Don't show the menu if the selection is at the beginning of the editor
  if (selectionPosition.x === 0 && selectionPosition.y === 0) {
    return <></>;
  }

  return (
    <div
      className="flex flex-row mb-2 border border-solid gap-x-2 border-neutral-200"
      style={getMenuStyle(selectionPosition)}
    >
      <RichTextInputStyleButton label="B" editorStyle="bold" />
      <RichTextInputStyleButton label="I" editorStyle="italic" />
      <RichTextInputStyleButton
        isBlock
        label="UL"
        editorStyle="unordered-list-item"
      />
      <RichTextInputStyleButton
        isBlock
        label="OL"
        editorStyle="ordered-list-item"
      />
    </div>
  );
};

export default RichTextInputMenu;
