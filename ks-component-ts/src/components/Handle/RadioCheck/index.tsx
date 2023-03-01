import React, { ForwardedRef, forwardRef } from "react";
import { Icon, SkeletonLoader } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES, SKELETONS } from "./constants";
import { type HandleProps } from "../types";

const RadioCheck = forwardRef<JSX.Element, HandleProps>(
  ({ id, name, isLoading, disabled, ...restProps }, ref) => (
    <div className={CLASS_NAMES.container}>
      <SkeletonLoader
        isLoading={isLoading}
        {...SKELETONS.radiocheck}
        afterLoading={
          <React.Fragment>
            <input
              {...restProps}
              ref={ref as ForwardedRef<HTMLInputElement>}
              type="checkbox"
              name={name}
              id={id || name}
              className={CLASS_NAMES.checkBox}
              disabled={disabled}
            />
            <label htmlFor={id || name} className={CLASS_NAMES.label}>
              <Icon width={12} height={12} icon="check" stroke="neutral-000" />
            </label>
          </React.Fragment>
        }
      />
    </div>
  )
);

export default RadioCheck;
