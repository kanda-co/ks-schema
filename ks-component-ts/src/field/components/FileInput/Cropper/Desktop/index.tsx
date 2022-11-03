import React, { FunctionComponent } from "react";
import { ModalLayoutCenter } from "@kanda-libs/ks-design-library";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import CropperTopOptions from "../CropperTopOptions";
import type { CropperProps } from "../types";
import { CLASS_NAMES } from "../constants";
import CropperBottomOptions from "../CropperBottomOptions";
import CropperFooter from "../CropperFooter";

export type DesktopProps = Pick<
  CropperProps,
  | "cropperTopOptionsProps"
  | "cropperBottomOptionsProps"
  | "onSave"
  | "onCancelCrop"
  | "cropperProps"
>;

const Desktop: FunctionComponent<DesktopProps> = function ({
  cropperTopOptionsProps,
  cropperBottomOptionsProps,
  onSave,
  onCancelCrop,
  cropperProps,
}) {
  return (
    <ModalLayoutCenter className="w-5/6 h-5/6" onClose={onCancelCrop}>
      <div className="flex flex-1 flex-col h-full mb-6">
        <CropperTopOptions {...cropperTopOptionsProps} />
        <div className={CLASS_NAMES.container}>
          <Cropper {...cropperProps} />
        </div>
        <CropperBottomOptions {...cropperBottomOptionsProps} />
      </div>
      <div className="flex w-full">
        <CropperFooter onSave={onSave} />
      </div>
    </ModalLayoutCenter>
  );
};

export default Desktop;
