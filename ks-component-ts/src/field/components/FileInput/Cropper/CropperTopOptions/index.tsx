import React, { type FunctionComponent } from "react";
import { Button } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES, BUTTONS } from "./constants";

export interface CropperTopOptionsProps {
  handleRotateClockwise?: () => void;
  handleRotateCounterClockwise?: () => void;
}

const CropperTopOptions: FunctionComponent<CropperTopOptionsProps> = function ({
  handleRotateClockwise,
  handleRotateCounterClockwise,
}) {
  return (
    <div className={CLASS_NAMES.container}>
      <Button.Icon
        id="cropper-rotate-ccw"
        onClick={handleRotateCounterClockwise}
        {...BUTTONS.rotateCounterClockwise}
      />
      <Button.Icon
        id="cropper-rotate-cw"
        onClick={handleRotateClockwise}
        {...BUTTONS.rotateClockwise}
      />
    </div>
  );
};

export default CropperTopOptions;
