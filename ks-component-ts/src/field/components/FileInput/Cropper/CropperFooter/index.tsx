import React, { type FunctionComponent, type MouseEvent } from "react";
import { Button } from "@kanda-libs/ks-design-library";
import "cropperjs/dist/cropper.css";

import { CLASS_NAMES, SAVE_BUTTON } from "./constants";

export interface CropperFooterProps {
  onSave?: (e?: MouseEvent) => void;
}

const CropperFooter: FunctionComponent<CropperFooterProps> = function ({
  onSave,
}) {
  return (
    <div className={CLASS_NAMES.footer}>
      <Button.Text id="cropper-save" onClick={onSave}>
        <>{SAVE_BUTTON}</>
      </Button.Text>
    </div>
  );
};

export default CropperFooter;
