import React, { type FunctionComponent } from "react";
import type { CropperProps } from "./types";
import useCropperProps from "~/field/components/FileInput/Cropper/useCropperProps";
import { BreakPoints, ModalContainer } from "@kanda-libs/ks-design-library";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Cropper: FunctionComponent<CropperProps> = function ({
  onCrop,
  onCancelCrop,
  file,
  name,
}) {
  const { modalId, ...props } = useCropperProps(file, onCrop, name);

  return (
    <ModalContainer id={modalId}>
      {() => (
        <BreakPoints
          mobile={<Mobile {...props} onCancelCrop={onCancelCrop} />}
          desktop={<Desktop {...props} onCancelCrop={onCancelCrop} />}
        />
      )}
    </ModalContainer>
  );
};

export default Cropper;
