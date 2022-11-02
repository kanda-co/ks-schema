import { useCallback } from "react";

import { dataURItoFile } from "./helpers";
import { CROPPER_PROPS } from "./constants";
import useImage from "./useImage";
import useImageManipulation from "./useImageManipulation";
import type { ReactCropperProps } from "./types";

export interface CropperPropsHook {
  onSave: () => void;
  modalId: string;
  cropperProps: ReactCropperProps;
}

export default function useCropperProps(
  file: File,
  onCrop: (file: File) => void,
  name: string
): CropperPropsHook {
  const { image, modalId } = useImage(name, file);

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

    const croppedFile = dataURItoFile(dataUrl, file.name, file.type);

    onCrop(croppedFile);
  }, [getDataUrl, file, onCrop]);

  const cropperProps = {
    ...CROPPER_PROPS,
    src: image as string,
    zoomTo: zoom,
    ref: cropperRef,
    ready: onReady,
  };

  const cropperButtomOptionsProps = {
    handleZoom,
    handleFit,
    handleReset,
    zoomRange,
  };

  const cropperTopOptionsProps = {
    handleRotateClockwise,
    handleRotateCounterClockwise,
  };

  return {
    onSave,
    modalId,
    cropperProps,
    cropperButtomOptionsProps,
    cropperTopOptionsProps,
  };
}
