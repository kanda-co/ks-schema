import DragMode = Cropper.DragMode;
import type { CSSProperties } from "react";

export const CLASS_NAMES = {
  container: "flex flex-1 relative",
};

export const TITLE = "Crop image";

export const SAVE_BUTTON = "Confirm & Save";

export const ICON_PROPS = {
  icon: "close",
};

export const CROPPER_PROPS = {
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as CSSProperties,
  dragMode: "move" as DragMode,
  zoomable: true,
  zoomOnWheel: false,
  center: true,
  restore: false,
  toggleDragModeOnDblclick: false,
};

export const RANGE_PROPS = {
  max: 20,
  min: -20,
  step: 1,
};
