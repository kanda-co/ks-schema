import React, { type FunctionComponent } from "react";
import { RadioSelectVariant } from "~/field/components/RadioSelect/types";
import { FieldRegisterMethod } from "~/field/types";
import useOption from "./useOption";
import Skeleton from "react-loading-skeleton";
import { Icon } from "@kanda-libs/ks-design-library";

export interface Props {
  /**
   * Name of the input required for form to work
   */
  fieldName: string;
  /**
   * Name of the input required for form to work
   */
  name?: string;
  /**
   * Option value
   */
  value?: string | number;
  /**
   * key to disable an option
   */
  disabled?: boolean;
  /**
   * Enables multi option select
   */
  multiple?: boolean;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Display options inline
   */
  inline?: boolean;
  /**
   * Display options wrap
   */
  wrap?: boolean;
  /**
   * Display variant
   */
  variant?: RadioSelectVariant;
  /**
   * Register function
   */
  register?: FieldRegisterMethod;
  /**
   * Event handler for clicking the option
   */
  onClick?: () => void;
  /**
   * Whether or not to show the option in a warning state
   */
  warning?: boolean;
  /**
   * Icon to display next to the option
   */
  icon?: string;
}

const Option: FunctionComponent<Props> = function ({
  fieldName,
  name,
  value,
  disabled,
  multiple = false,
  variant = "default",
  isLoading,
  inline = false,
  wrap = false,
  register,
  onClick = () => {},
  warning = false,
  icon,
}) {
  const { id, classNames, handleProps, Handle } = useOption(
    multiple,
    fieldName,
    value as string,
    variant,
    inline,
    wrap,
    register,
    disabled,
    warning
  );

  return (
    <label htmlFor={id} key={value} className={classNames.option as string}>
      <div className={classNames.container as string}>
        <div
          className={classNames.handleContainer as string}
          onClick={() => {
            onClick();
          }}
        >
          <Handle
            id={id}
            {...handleProps}
            value={value}
            isLoading={isLoading}
            disabled={disabled}
          />
        </div>
        {isLoading ? (
          <div className={classNames.skeletonWrapper as string}>
            <div className={classNames.skeleton as string}>
              <Skeleton />
            </div>
          </div>
        ) : (
          <span className={classNames.span as string}>
            {icon && (
              <Icon
                icon={icon}
                size={12}
                className={classNames.icon as string}
              />
            )}
            {name}
          </span>
        )}
      </div>
    </label>
  );
};

export default Option;
