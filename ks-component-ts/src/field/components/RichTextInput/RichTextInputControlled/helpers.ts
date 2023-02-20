import { EditorState } from "draft-js";

export interface SelectionPosition {
  x: number;
  y: number;
}

export const getSelectionPosition = (
  editorState: EditorState
): SelectionPosition => {
  let selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  let selectionRange = selection?.getRangeAt(0).cloneRange();

  if (!selectionRange) return;

  selectionRange.collapse(false);
  //-----
  let caretMarker = document.createElement("span");
  caretMarker.id = "__caret";
  selectionRange.insertNode(caretMarker);
  let caretPosition = document
    .querySelector("#__caret")
    ?.getBoundingClientRect();

  //-----
  selectionRange.deleteContents();

  const { x, y } = caretPosition || { x: 0, y: 0 };

  return { x, y };
};
