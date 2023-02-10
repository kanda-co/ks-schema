import React, { type FunctionComponent } from "react";
import type { RichTextSupportedStyle } from "../types";
import useRichTextStyle from "./useRichTextStyle";

export interface RichTextInputStyleButtonProps {
  label: string;
  editorStyle: RichTextSupportedStyle;
  isBlock?: boolean;
}

const RichTextInputStyleButton: FunctionComponent<RichTextInputStyleButtonProps> =
  function ({ label, editorStyle, isBlock = false }) {
    const { active, onMouseDown } = useRichTextStyle(editorStyle, isBlock);

    return (
      <button
        onMouseDown={onMouseDown}
        type="button"
        style={{
          padding: "3px 5px",
          fontWeight: active ? "bold" : "normal",
        }}
      >
        <>{label}</>
      </button>
    );
  };

export default RichTextInputStyleButton;
