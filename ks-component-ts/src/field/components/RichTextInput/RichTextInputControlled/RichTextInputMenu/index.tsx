import React, { type FunctionComponent } from "react";
import RichTextInputStyleButton from "../RichTextInputStyleButton";
import { CLASS_NAMES } from "./constants";

const RichTextInputMenu: FunctionComponent = function () {
  return (
    <div className={CLASS_NAMES.wrapper}>
      <RichTextInputStyleButton icon="bold" editorStyle="bold" />
      <RichTextInputStyleButton icon="italic" editorStyle="italic" />
      <RichTextInputStyleButton
        isBlock
        icon="ordered-list"
        editorStyle="unordered-list-item"
      />
      <RichTextInputStyleButton
        isBlock
        icon="unordered-list"
        editorStyle="ordered-list-item"
      />
    </div>
  );
};

export default RichTextInputMenu;
