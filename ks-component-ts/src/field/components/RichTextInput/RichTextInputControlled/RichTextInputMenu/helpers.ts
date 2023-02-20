import { HTMLAttributes } from "react";
import type { SelectionPosition } from "../types";

export const getMenuStyle = (
  selectionPosition: SelectionPosition
): HTMLAttributes<HTMLDivElement>["style"] => ({
  position: "absolute",
  zIndex: 100,
  top: `${selectionPosition.y}px`,
  left: `${selectionPosition.x}px`,
});
