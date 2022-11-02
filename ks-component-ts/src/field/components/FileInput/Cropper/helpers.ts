import type { CropperRef } from "./types";

/**
 * Creates blob
 * @param dataURI
 * @returns blob representation of url
 */
const dataURItoBlob = (dataURI: string): Blob => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

/**
 * Converts url to file
 * @param url
 * @param fileName
 * @param type
 * @returns file object
 */
export const dataURItoFile = (
  url: string,
  fileName: string,
  type: string
): File => {
  const blob = dataURItoBlob(url);
  return new File([blob], fileName, { type });
};

/**
 * Handle zoom
 * When react-cropper is initialised with an image, the image zoom is set so
 * the image fills the container (default behaviour). As such, the initial
 * zoom is likely never 1. As such, we instantiate initialZoom at ready.
 * The zoom input itself is controlled so that it starts at 0 and travels
 * between -20 and 20. The zoom level is actually calculated via
 * initialZoom * (10 ** (0.1 * zoom)), thus can be maginfied plus or minus
 * 100 times.
 * @param initialZoom initial image zoom
 * @param newZoom new zoom value
 * @returns zoom value
 */
export const calculateZoom = (initialZoom: number, newZoom: number): number =>
  initialZoom * 10 ** (0.1 * newZoom);

/**
 * Handels rotate
 * @param cropperRef
 * @param degrees
 */
export const rotateAndReCrop = (cropperRef: CropperRef, degrees: number) => {
  cropperRef.current.cropper.rotate(degrees);

  /*
   * Calculates new canvas and crop size
   */
  const contData = cropperRef.current.cropper.getContainerData();
  const canvData = cropperRef.current.cropper.getCanvasData();
  const newWidth = canvData.width * (contData.height / canvData.height);

  if (newWidth >= contData.width) {
    const newHeight = canvData.height * (contData.width / canvData.width);
    const newCanvData = {
      height: newHeight,
      width: contData.width,
      top: (contData.height - newHeight) / 2,
      left: 0,
    };
    cropperRef.current.cropper.setCanvasData(newCanvData);
    cropperRef.current.cropper.setCropBoxData(newCanvData);
  } else {
    const newCanvData = {
      height: contData.height,
      width: newWidth,
      top: 0,
      left: (contData.width - newWidth) / 2,
    };
    cropperRef.current.cropper.setCanvasData(newCanvData);
    cropperRef.current.cropper.setCropBoxData(newCanvData);
  }
};

/**
 * Handles fitting the image
 * @param cropperRef
 */
export const fit = (cropperRef: CropperRef) => {
  // gets both the canvas (image) and crop box data
  const canvasData = cropperRef.current.cropper.getCanvasData();
  const cropBoxData = cropperRef.current.cropper.getCropBoxData();

  // set up variables for later use
  let width = 0;
  let height = 0;
  let aspectRatio = 0;
  let left = 0;
  let top = 0;

  if (canvasData.naturalWidth >= canvasData.naturalHeight) {
    // if image is width than tall (or equal):
    // get width of crop box - this will be the width of the image
    width = cropBoxData.width;
    // get ascpect ratio between crob box width and image width
    aspectRatio = cropBoxData.width / canvasData.naturalWidth;
    // width is set to natural height times aspect ratio
    height = canvasData.naturalHeight * aspectRatio;
    // sets the left location of the image to the left of the cropper
    left = cropBoxData.left;
    // sets the top location of the image to center the image in the cropper
    top = cropBoxData.top + (cropBoxData.height - height) / 2;
  } else {
    // if image is taller than wide:
    // get height of crop box - this will be the height of the image
    height = cropBoxData.height;
    // get ascpect ratio between crob box height and image height
    aspectRatio = cropBoxData.height / canvasData.naturalHeight;
    // width is set to natural width times aspect ratio
    width = canvasData.naturalWidth * aspectRatio;
    // sets the left location of the image to center the image in the cropper
    left = cropBoxData.left + (cropBoxData.width - width) / 2;
    // sets the top location of the image to the top of the cropper
    top = cropBoxData.top;
  }

  // set the canvas data to the above calculated values
  cropperRef.current.cropper.setCanvasData({
    ...canvasData,
    width,
    height,
    top,
    left,
  });
};
