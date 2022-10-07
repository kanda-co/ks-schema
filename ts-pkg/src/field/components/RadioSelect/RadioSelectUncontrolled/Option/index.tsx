import React, { FunctionComponent } from "react";
import { RadioSelectVariant } from "~/field/components/RadioSelect/types";
import { FieldRegisterMethod } from "~/field/types";
import useOption from "./useOption";
import Skeleton from "react-loading-skeleton";

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
   * Display variant
   */
  variant?: RadioSelectVariant;
  /**
   * Register function
   */
  register?: FieldRegisterMethod;
}

const Option: FunctionComponent<Props> = function ({
  fieldName,
  name,
  value,
  multiple = false,
  variant = "default",
  isLoading,
  inline = false,
  register,
}) {
  const { id, classNames, handleProps, Handle } = useOption(
    multiple,
    fieldName,
    value as string,
    variant,
    inline,
    register
  );

  return (
    <label htmlFor={id} key={value} className={classNames.option as string}>
      <div className={classNames.container as string}>
        <div className={classNames.handleContainer as string}>
          <Handle
            id={id}
            {...handleProps}
            value={value}
            isLoading={isLoading}
          />
        </div>
        {isLoading ? (
          <div className={classNames.skeletonWrapper as string}>
            <div className={classNames.skeleton as string}>
              <Skeleton />
            </div>
          </div>
        ) : (
          <span className={classNames.span as string}>{name}</span>
        )}
      </div>
    </label>
  );
};

export default Option;
