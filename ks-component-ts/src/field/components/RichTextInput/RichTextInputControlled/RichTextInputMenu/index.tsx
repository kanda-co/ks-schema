import React, { type FunctionComponent } from "react";
import RichTextInputStyleButton from "../RichTextInputStyleButton";

const RichTextInputMenu: FunctionComponent = function () {
  return (
    <div className="flex flex-row mb-2 border border-solid gap-x-2 border-neutral-200">
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
