import React, { type FunctionComponent } from "react";
import { ModalLayoutFullScreen } from "@kanda-libs/ks-design-library";
import Cropper from "react-cropper";
import CropperTopOptions from "../CropperTopOptions";
import { CLASS_NAMES } from "../constants";
import CropperBottomOptions from "../CropperBottomOptions";
import CropperFooter from "../CropperFooter";
import type { CropperProps } from "../types";
import CropperHeader from "~/field/components/FileInput/Cropper/CropperHeader";

export type MobileProps = Pick<
  CropperProps,
  | "cropperTopOptionsProps"
  | "cropperBottomOptionsProps"
  | "onSave"
  | "onCancelCrop"
  | "cropperProps"
>;

const Mobile: FunctionComponent<MobileProps> = function ({
  cropperTopOptionsProps,
  cropperBottomOptionsProps,
  onSave,
  onCancelCrop,
  cropperProps,
}) {
  return (
    <ModalLayoutFullScreen
      footer={<CropperFooter onSave={onSave} />}
      header={<CropperHeader onCancelCrop={onCancelCrop} />}
    >
      <CropperTopOptions {...cropperTopOptionsProps} />
      <div className={CLASS_NAMES.container}>
        <Cropper {...cropperProps} />
      </div>
      <CropperBottomOptions {...cropperBottomOptionsProps} />
    </ModalLayoutFullScreen>
  );
};

export default Mobile;
