import { useRef, useState, useCallback } from "react";
import { calculateZoom, rotateAndReCrop, fit } from "./helpers";
import { CropperRef } from "./types";

export interface ImageManipulationHook {
  handleRotateClockwise: () => void;
  handleRotateCounterClockwise: () => void;
  cropperRef: CropperRef;
  zoomRange: number | number[];
  zoom?: number;
  onReady: () => void;
  handleFit: () => void;
  handleZoom: (zoom: number) => void;
  handleReset: () => void;
  getDataUrl: () => string;
}

/**
 * Hook to handle image manipulation logic and state
 */
export default function useImageManipulation(): ImageManipulationHook {
  const [zoomRange, setZoomRange] = useState<number | number[]>(1);
  const [zoom, setZoom] = useState<number | undefined>();

  const cropperRef = useRef() as CropperRef;
  const initialZoom = useRef<number>(0);

  /**
   * Resets zoom
   */
  const resetZoom = useCallback(() => {
    const imageData = cropperRef.current?.cropper.getImageData();

    initialZoom.current = imageData.width / imageData.naturalWidth;

    setZoom(initialZoom.current);
    setZoomRange(0);
  }, []);

  /**
   * Handles ready
   */
  const onReady = useCallback(() => {
    cropperRef.current.cropper.reset();

    resetZoom();
  }, [resetZoom]);

  /**
   * Handles zoom
   * @param {number} newZoom
   */
  const handleZoom = useCallback((newZoom: number) => {
    setZoomRange(newZoom);
    setZoom(calculateZoom(initialZoom.current, newZoom));
  }, []);

  /**
   * Handles reset
   * @param {number} newZoom
   */
  const handleReset = useCallback(() => {
    cropperRef.current.cropper.reset();

    resetZoom();
  }, [resetZoom]);

  /**
   * Handles fit
   * @param {number} newZoom
   */
  const handleFit = useCallback(() => {
    fit(cropperRef);
    resetZoom();
  }, [resetZoom]);

  /**
   * returns data url
   */
  const getDataUrl = useCallback(
    () => cropperRef.current.cropper.getCroppedCanvas().toDataURL(),
    []
  );

  /**
   * Handles rotate clockwise
   */
  const handleRotateClockwise = useCallback(() => {
    rotateAndReCrop(cropperRef, -90);
    resetZoom();
  }, [resetZoom]);

  /**
   * Handles rotate counter clockwise
   */
  const handleRotateCounterClockwise = useCallback(() => {
    rotateAndReCrop(cropperRef, 90);
    resetZoom();
  }, [resetZoom]);

  return {
    handleRotateClockwise,
    handleRotateCounterClockwise,
    cropperRef,
    zoomRange,
    zoom,
    onReady,
    handleFit,
    handleZoom,
    handleReset,
    getDataUrl,
  };
}
