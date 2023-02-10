import { useCallback, useContext, useEffect, useMemo } from "react";
import { RichUtils } from "draft-js";
import type { RichTextSupportedStyle } from "../types";
import RichTextInputContext from "../RichTextInputContext";

export interface RichTextStyleHook {
  onClick: () => void;
  active: boolean;
}

export default function useRichTextStyle(
  style: RichTextSupportedStyle,
  isBlock: boolean
): RichTextStyleHook {
  const { editorState, setEditorState, editorRef } =
    useContext(RichTextInputContext);
  const formattedStyle = isBlock ? style : style.toUpperCase();

  const selection = useMemo(() => editorState?.getSelection(), [editorState]);
  const blockType = useMemo(
    () =>
      editorState
        ?.getCurrentContent()
        .getBlockForKey(selection?.getStartKey() as string)
        .getType(),
    [editorState, selection]
  );

  const onClick = useCallback(() => {
    if (!editorState || !setEditorState) return;
    const method = isBlock ? "toggleBlockType" : "toggleInlineStyle";
    setEditorState(RichUtils[method](editorState, formattedStyle));
  }, [editorState, formattedStyle, setEditorState, isBlock]);

  useEffect(() => {
    editorRef?.current?.focus();
  }, [editorState, editorRef]);

  const active = useMemo(() => {
    if (isBlock) return blockType === formattedStyle;
    return editorState?.getCurrentInlineStyle().has(formattedStyle) || false;
  }, [editorState, formattedStyle, blockType, isBlock]);

  return {
    onClick,
    active,
  };
}
