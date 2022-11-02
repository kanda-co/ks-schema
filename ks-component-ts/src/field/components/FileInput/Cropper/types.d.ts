import type { MutableRefObject } from "react";
import Cropper from "cropperjs";
import * as React from "react";
import ReactCropper from "react-cropper";

export type CropperRef = MutableRefObject<{
  cropper: Cropper;
}>;

interface ReactCropperProps
  extends Cropper.Options,
    Omit<React.HTMLProps<HTMLImageElement>, "data" | "ref"> {
  ref: CropperRef;
}
