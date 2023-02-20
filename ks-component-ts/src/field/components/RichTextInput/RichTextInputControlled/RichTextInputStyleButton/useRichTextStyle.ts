import { useCallback, useContext, type MouseEvent, useMemo } from "react";
import { RichUtils } from "draft-js";
import type { RichTextSupportedStyle } from "../types";
import RichTextInputContext from "../RichTextInputContext";
import clsx from "clsx";

export interface RichTextStyleHook {
  onMouseDown: (e: MouseEvent) => void;
  className: string;
  iconClassName: string;
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

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      if (!editorState || !setEditorState) return;
      e.preventDefault();
      e.stopPropagation();
      console.log("nice");
      const method = isBlock ? "toggleBlockType" : "toggleInlineStyle";
      setEditorState(RichUtils[method](editorState, formattedStyle));
    },
    [editorState, formattedStyle, editorRef, setEditorState, isBlock]
  );

  const active = useMemo(() => {
    if (isBlock) return blockType === formattedStyle;
    return editorState?.getCurrentInlineStyle().has(formattedStyle) || false;
  }, [editorState, formattedStyle, blockType, isBlock]);

  const className = useMemo(
    () => clsx(active ? "bg-neutral-200" : "hover:bg-neutral-200"),
    [active]
  );

  const iconClassName = useMemo(
    () => clsx(active ? "text-red-200" : "text-neutral-500 hover:text-red-200"),
    [active]
  );

  return {
    onMouseDown,
    className,
    iconClassName,
  };
}
