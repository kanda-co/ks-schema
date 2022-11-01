import React, { FunctionComponent, HTMLAttributes } from "react";
import { Icon } from "@kanda-libs/ks-design-library";
import { BUTTON_CLASSNAME, ICON_PROPS } from "./constants";

export interface HeaderButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const HeaderButton: FunctionComponent<HeaderButtonProps> = function ({
  label,
  ...props
}) {
  return (
    <button className={BUTTON_CLASSNAME} {...props}>
      {label}
      <Icon {...ICON_PROPS} />
    </button>
  );
};

export default HeaderButton;
1;
