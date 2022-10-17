import React, { FunctionComponent } from "react";
import {
  Icon,
  SkeletonLoader,
  PassConstants,
} from "@kanda-libs/ks-design-library";
import { StringIndexedObject } from "~/types";
import constants from "./constants";

export interface ButtonTextProps {
  /**
   * Children
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * ClassName
   */
  className?: string;
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Icon props
   */
  iconProps?: {
    className: string;
    stroke: string;
    flip: boolean;
    width: number;
    height: number;
    size: number;
    fill: string;
    isLoading: boolean;
  };
  /**
   * Button variant name
   */
  variant?: "solid" | "gradient" | "ghost" | "outline";
  /**
   * sets button to disabled
   */
  disabled?: boolean;
  /**
   * sets button type to submit instead of button
   */
  submit?: boolean;
  /**
   * changes position of the icon to left from right
   */
  left?: boolean;
  /**
   * Button size
   */
  size?: "custom" | 48 | 40 | 32 | 24;
  /**
   * Button label
   */
  label?: string | JSX.Element | JSX.Element[];
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Icon spacing
   */
  iconSpacing?: number;
  /**
   * Append
   */
  append?: JSX.Element | JSX.Element[];
  /**
   * Prepend
   */
  prepend?: JSX.Element | JSX.Element[];
  /**
   * onClick
   */
  onClick: () => void;
}

const ButtonText: FunctionComponent<ButtonTextProps> = function ({
  variant = "solid",
  iconSpacing,
  label,
  size = 48,
  children = null,
  icon,
  iconProps = {},
  className,
  submit,
  left = false,
  isLoading = false,
  append = null,
  prepend = null,
  ...restProps
}) {
  return (
    <PassConstants
      constants={constants}
      className={className as string}
      variant={variant}
      left={left}
      iconSpacing={iconSpacing}
      loading={isLoading}
      size={size}
    >
      {({
        classNames,
        getButtonProps,
        getIconProps,
        getSkeletonProps,
      }: StringIndexedObject) => (
        <button
          type={submit ? "submit" : "button"}
          {...getButtonProps(restProps)}
        >
          <span className={classNames.container}>
            <div>
              <strong>{JSON.stringify(getButtonProps(restProps))}</strong>
              <i>{JSON.stringify(restProps)}</i>
            </div>
            {prepend}
            <span className={classNames.content}>
              {label || children}
              {icon && <span className={classNames.iconSpace} />}
              {icon && <Icon {...getIconProps({ ...iconProps, icon })} />}
            </span>
            {append}
          </span>
          <SkeletonLoader {...getSkeletonProps({ isLoading })} />
        </button>
      )}
    </PassConstants>
  );
};

export default ButtonText;
