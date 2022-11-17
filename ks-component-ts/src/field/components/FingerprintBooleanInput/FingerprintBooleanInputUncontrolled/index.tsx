import React, { type FunctionComponent } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import { DefaultFormFieldProps } from "~/field/types";
import useFingerprintBooleanInputUncontrolled from "./useFingerprintBooleanInputUncontrolled";
import { CLASS_NAMES } from "./constants";
import { FingerprintBooleanInputProps } from "../types";

const FingerprintBooleanInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<FingerprintBooleanInputProps>
> = function ({
  name,
  handle,
  forwardRef,
  isLoading,
  fieldText,
  ...restProps
}) {
  const { Handle, skeletonClassName } = useFingerprintBooleanInputUncontrolled(
    name as string,
    handle
  );

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

export default FingerprintBooleanInputUncontrolled;
