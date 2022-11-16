import React, { type FunctionComponent } from "react";
import useHeaderButtonWrapperProps from "./useHeaderButtonWrapperProps";

export interface HeaderButtonWrapperProps {
  children?: JSX.Element | JSX.Element[];
  /**
   * Header index
   */
  index?: number;
}

const HeaderButtonWrapper: FunctionComponent<HeaderButtonWrapperProps> =
  function ({ children = null, index = 0 }) {
    const { classNames, containerStyle } = useHeaderButtonWrapperProps(index);

    return (
      <div className={classNames.container} style={containerStyle}>
        <div className={classNames.flex}>{children}</div>
      </div>
    );
  };

export default HeaderButtonWrapper;
