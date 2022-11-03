import type { HTMLProps } from "react";
import type { MutableRefObject } from "react";
import Cropper from "cropperjs";
import { CropperBottomOptionsProps } from "~/field/components/FileInput/Cropper/CropperBottomOptions";
import { CropperTopOptionsProps } from "~/field/components/FileInput/Cropper/CropperTopOptions";
import { MouseEvent } from "react";

export type CropperRef = MutableRefObject<{
  cropper: Cropper;
}>;

export interface ReactCropperProps
  extends Cropper.Options,
    Omit<HTMLProps<HTMLImageElement>, "data" | "ref"> {
  ref: CropperRef;
}

export interface CropperProps {
  /**
   * OnCrop callback
   */
  onCrop: (file: File) => void;
  /**
   * OnCancelCrop callback
   */
  onCancelCrop: () => void;
  /**
   * Field name
   */
  name: string;
  /**
   * File object to be cropped
   */
  file?: File;
  cropperBottomOptionsProps: CropperBottomOptionsProps;
  cropperTopOptionsProps: CropperTopOptionsProps;
  onSave: (e?: MouseEvent) => void;
  cropperProps: Omit<ReactCropperProps, "ref">;
}
