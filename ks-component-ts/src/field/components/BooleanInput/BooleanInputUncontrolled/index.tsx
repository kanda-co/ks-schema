import React, { ForwardedRef, FunctionComponent } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import { type HandleType, type HandleProps } from "~/components/Handle/types";
import useBooleanInputHandle from "./useBooleanInputHandle";
import { CLASS_NAMES } from "./constants";

export interface BooleanFieldProps extends HandleProps {
  /**
   * ForwardRef
   */
  forwardRef?: ForwardedRef<JSX.Element>;
  /**
   * type of handle
   */
  handle?: string;
  /**
   * Field label
   */
  label?: string | JSX.Element;
  /**
   * Accompanying field text
   */
  fieldText?: string | JSX.Element;
  /**
   * Field warning message
   */
  warning?: string | JSX.Element;
}

const BooleanInputUncontrolled: FunctionComponent<BooleanFieldProps> =
  function ({ forwardRef, handle, fieldText, name, isLoading, ...restProps }) {
    const { Handle, skeletonClassName } = useBooleanInputHandle(handle);

    return (
      <div className={CLASS_NAMES.container}>
        <Handle
          ref={forwardRef}
          name={name}
          isLoading={isLoading}
          {...restProps}
        />
        {fieldText && (
          <SkeletonLoader
            isLoading={isLoading}
            wrapperClassName={skeletonClassName}
            afterLoading={
              <label htmlFor={name} className={CLASS_NAMES.label}>
                {fieldText}
              </label>
            }
          />
        )}
      </div>
    );
  };

export default BooleanInputUncontrolled;
