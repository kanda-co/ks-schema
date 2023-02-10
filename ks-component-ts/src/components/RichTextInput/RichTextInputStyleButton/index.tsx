import { type FunctionComponent } from "react";
import type { RichTextSupportedStyle } from "../types";
import useRichTextStyle from "./useRichTextStyle";

export interface RichTextInputStyleButtonProps {
  label: string;
  editorStyle: RichTextSupportedStyle;
  isBlock?: boolean;
}

const RichTextInputStyleButton: FunctionComponent<RichTextInputStyleButtonProps> =
  function ({ label, editorStyle, isBlock = false }) {
    const { active, onClick } = useRichTextStyle(editorStyle, isBlock);

    return (
      <button
        onClick={onClick}
        type="button"
        style={{
          padding: "5px 10px",
          border: `1px solid ${active ? "red" : "grey"}`,
          borderRadius: "5px",
          marginRight: "5px",
          fontWeight: active ? "bold" : "normal",
        }}
      >
        <>{label}</>
      </button>
    );
  };

export default RichTextInputStyleButton;
