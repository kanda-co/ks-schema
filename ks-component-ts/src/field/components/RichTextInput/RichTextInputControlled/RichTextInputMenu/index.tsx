import React, { type FunctionComponent } from "react";
import RichTextInputStyleButton from "../RichTextInputStyleButton";
import { CLASS_NAMES } from "./constants";

const RichTextInputMenu: FunctionComponent = function () {
  return (
    <div className={CLASS_NAMES.wrapper}>
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
