import React, { forwardRef, type HTMLAttributes } from "react";
import { CLASS_NAMES } from "../constants";

export type ThumbProps = HTMLAttributes<HTMLDivElement>;

const Thumb = forwardRef<HTMLDivElement, ThumbProps>((props, ref) => (
  <div {...props} ref={ref} className={CLASS_NAMES.thumb} />
));

export default Thumb;
