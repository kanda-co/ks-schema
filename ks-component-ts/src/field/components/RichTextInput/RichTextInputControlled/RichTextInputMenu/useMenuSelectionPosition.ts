import { useContext, useEffect, useState } from "react";
import RichTextInputContext from "../RichTextInputContext";
import { SelectionPosition } from "../types";
import { getSelectionPosition } from "./helpers";

export type MenuSelectionPositionHook = SelectionPosition;

export default function useMenuSelectionPosition(): MenuSelectionPositionHook {
  const { editorState } = useContext(RichTextInputContext);
  const [selectionPosition, setSelectionPosition] = useState<SelectionPosition>(
    getSelectionPosition()
  );

  useEffect(() => {
    setSelectionPosition(getSelectionPosition());
  }, [editorState]);

  return selectionPosition;
}
