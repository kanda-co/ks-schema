import React, { type FunctionComponent } from "react";
import "cropperjs/dist/cropper.css";

import { Button, Icon } from "@kanda-libs/ks-design-library";
import RangeSlider from "~/components/RangeSlider";
import {
  RANGE_PROPS,
  CLASS_NAMES,
  ICONS,
  FIT_LABEL,
  RESET_LABEL,
} from "./constants";

export interface CropperBottomOptionsProps {
  zoomRange: number[];
  handleZoom: (values?: number | number[]) => void;
  handleFit: () => void;
  handleReset: () => void;
}

const CropperBottomOptions: FunctionComponent<CropperBottomOptionsProps> =
  function ({ zoomRange, handleZoom, handleFit, handleReset }) {
    return (
      <div className={CLASS_NAMES.container}>
        <div className={CLASS_NAMES.left}>
          <Button.Link onClick={handleFit}>{FIT_LABEL}</Button.Link>
        </div>
        <div className={CLASS_NAMES.center}>
          <Icon {...ICONS.minus} />
          <RangeSlider
            {...RANGE_PROPS}
            value={zoomRange}
            onChange={handleZoom}
          />
          <Icon {...ICONS.plus} />
        </div>
        <div className={CLASS_NAMES.right}>
          <Button.Link onClick={handleReset}>{RESET_LABEL}</Button.Link>
        </div>
      </div>
    );
  };

export default CropperBottomOptions;
