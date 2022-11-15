import React, {
  forwardRef,
  type HTMLAttributes,
  StyleHTMLAttributes,
} from "react";
import { CLASS_NAMES } from "../constants";

export interface TrackProps
  extends Pick<
    HTMLAttributes<HTMLDivElement>,
    "children" | "onMouseDown" | "onTouchStart"
  > {
  trackStyle?: StyleHTMLAttributes<HTMLDivElement>;
}

const Track = forwardRef<HTMLDivElement, TrackProps>(
  ({ children, onMouseDown, onTouchStart, trackStyle }, ref) => (
    <div
      role="button"
      tabIndex={-1}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={CLASS_NAMES.trackWrapper}
      ref={ref}
    >
      <div ref={ref} className={CLASS_NAMES.track} style={trackStyle}>
        {children}
      </div>
    </div>
  )
);

export default Track;
