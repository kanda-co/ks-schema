import { useCallback } from "react";

import { dataURItoFile } from "./helpers";
import { CROPPER_PROPS } from "./constants";
import useImage from "./useImage";
import useImageManipulation from "./useImageManipulation";
import type { ReactCropperProps } from "./types";
import type { CropperBottomOptionsProps } from "./CropperBottomOptions";
import type { CropperTopOptionsProps } from "./CropperTopOptions";

export interface CropperPropsHook {
  onSave: () => void;
  modalId: string;
  cropperProps: ReactCropperProps;
  cropperBottomOptionsProps: CropperBottomOptionsProps;
  cropperTopOptionsProps: CropperTopOptionsProps;
}

export default function useCropperProps(
  file: File | undefined,
  onCrop: (file: File) => void,
  name?: string
): CropperPropsHook {
  const { image, modalId } = useImage(name as string, file as File);

  const {
    cropperRef,
    zoom,
    zoomRange,
    onReady,
    handleZoom,
    handleFit,
    getDataUrl,
    handleReset,
    handleRotateClockwise,
    handleRotateCounterClockwise,
  } = useImageManipulation();

  /**
   * Handles save logic and calls callback function
   */
  const onSave = useCallback(() => {
    const dataUrl = getDataUrl();

    if (!dataUrl) return;

    const croppedFile = dataURItoFile(
      dataUrl,
      file?.name as string,
      file?.type as string
    );

    onCrop(croppedFile);
  }, [getDataUrl, file, onCrop]);

  const cropperProps = {
    ...CROPPER_PROPS,
    src: image as string,
    zoomTo: zoom,
    ref: cropperRef,
    ready: onReady,
  };

  const cropperBottomOptionsProps = {
    handleZoom,
    handleFit,
    handleReset,
    zoomRange,
  } as CropperBottomOptionsProps;

  const cropperTopOptionsProps = {
    handleRotateClockwise,
    handleRotateCounterClockwise,
  } as CropperTopOptionsProps;

  return {
    onSave,
    modalId,
    cropperProps,
    cropperBottomOptionsProps,
    cropperTopOptionsProps,
  };
}
