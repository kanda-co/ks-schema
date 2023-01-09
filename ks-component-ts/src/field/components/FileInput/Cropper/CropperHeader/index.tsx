import React, { type FunctionComponent } from "react";
import { Button, Header } from "@kanda-libs/ks-design-library";
import { ICON_PROPS, TITLE } from "./constants";

export interface CropperHeaderProps {
  onCancelCrop: () => void;
}

const CropperHeader: FunctionComponent<CropperHeaderProps> = function ({
  onCancelCrop,
}) {
  return (
    <Header.Base
      options={[
        <Button.Icon
          key="close"
          id="cropper-close"
          {...ICON_PROPS}
          onClick={onCancelCrop}
        />,
      ]}
    >
      <>{TITLE}</>
    </Header.Base>
  );
};

export default CropperHeader;
