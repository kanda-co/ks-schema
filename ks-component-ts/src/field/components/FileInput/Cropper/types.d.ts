import type { HTMLProps } from "react";
import type { MutableRefObject } from "react";
// import Cropper from "cropperjs";
import { CropperBottomOptionsProps } from "~/field/components/FileInput/Cropper/CropperBottomOptions";
import { CropperTopOptionsProps } from "~/field/components/FileInput/Cropper/CropperTopOptions";
import { MouseEvent } from "react";
import type { ReactCropperProps } from "react-cropper";

export type CropperRef = MutableRefObject<{
  cropper: Cropper;
}>;

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
  name?: string;
  /**
   * File object to be cropped
   */
  file?: File;
  cropperBottomOptionsProps?: CropperBottomOptionsProps;
  cropperTopOptionsProps?: CropperTopOptionsProps;
  onSave?: (e?: MouseEvent) => void;
  cropperProps?: Omit<ReactCropperProps, "ref">;
}
