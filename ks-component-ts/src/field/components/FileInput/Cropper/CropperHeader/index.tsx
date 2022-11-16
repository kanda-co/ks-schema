import { Button, Header } from "@kanda-libs/ks-design-library";
import React, { type FunctionComponent } from "react";
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
        <Button.Icon key="close" {...ICON_PROPS} onClick={onCancelCrop} />,
      ]}
    >
      <>{TITLE}</>
    </Header.Base>
  );
};

export default CropperHeader;
