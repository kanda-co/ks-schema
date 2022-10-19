import React, { ForwardedRef, forwardRef } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES, SKELETONS } from "./constants";
import { type HandleProps } from "../types";

const RadioButton = forwardRef<JSX.Element, HandleProps>(
  ({ id, name, isLoading, ...restProps }, ref) => (
    <div className={CLASS_NAMES.container}>
      <SkeletonLoader
        isLoading={isLoading}
        {...SKELETONS.radiobutton}
        afterLoading={
          <>
            <input
              {...restProps}
              ref={ref as ForwardedRef<HTMLInputElement>}
              type="radio"
              name={name}
              id={id || name}
              className={CLASS_NAMES.checkBox}
            />
            <label htmlFor={id || name} className={CLASS_NAMES.label}>
              <div className={CLASS_NAMES.icon} />
            </label>
          </>
        }
      />
    </div>
  )
);

export default RadioButton;
