import { useContext, useEffect, useState } from "react";
import usePreviousValue from "~/hooks/usePreviousValue";
import RichTextInputContext from "../RichTextInputContext";
import { SelectionPosition } from "../types";
import { getSelectionPosition } from "./helpers";

export interface MenuSelectionPositionHook extends SelectionPosition {
  hideMenu: boolean;
}

export default function useMenuSelectionPosition(): MenuSelectionPositionHook {
  const { editorState } = useContext(RichTextInputContext);
  const [selectionPosition, setSelectionPosition] = useState<SelectionPosition>(
    getSelectionPosition()
  );

  const { previousValue: previousXValue = 0 } = usePreviousValue(
    selectionPosition.x
  );

  const { previousValue: previousYValue = 0 } = usePreviousValue(
    selectionPosition.y
  );

  const hideMenu =
    selectionPosition.x === 0 &&
    previousXValue === 0 &&
    selectionPosition.y === 0 &&
    previousYValue === 0;

  useEffect(() => {
    setSelectionPosition(getSelectionPosition());
  }, [editorState]);

  return {
    hideMenu,
    x: selectionPosition.x === 0 ? previousXValue : selectionPosition.x,
    y: selectionPosition.y === 0 ? previousYValue : selectionPosition.y,
  };
}
