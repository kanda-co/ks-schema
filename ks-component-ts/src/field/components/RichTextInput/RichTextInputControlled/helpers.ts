import type { SelectionPosition } from "./types";

export const getSelectionPosition = (): SelectionPosition => {
  let selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return { x: 0, y: 0 };
  let selectionRange = selection?.getRangeAt(0).cloneRange();

  if (!selectionRange) return { x: 0, y: 0 };

  const selectionPosition = selectionRange.getBoundingClientRect();

  const { x, y } = selectionPosition || { x: 0, y: 0 };

  return { x, y };
};
