import React, { ForwardedRef, forwardRef } from "react";
import { Icon, SkeletonLoader } from "@kanda-libs/ks-design-library";
import { CLASS_NAMES, SKELETONS } from "./constants";
import { type HandleProps } from "../types";

const Checkbox = forwardRef<JSX.Element, HandleProps>(
  ({ id, name, isLoading, ...restProps }, ref) => (
    <div className={CLASS_NAMES.container}>
      <SkeletonLoader
        {...SKELETONS.checkbox}
        isLoading={isLoading}
        afterLoading={
          <>
            <input
              {...restProps}
              ref={ref as ForwardedRef<HTMLInputElement>}
              type="checkbox"
              name={name}
              id={id || name}
              className={CLASS_NAMES.checkBox}
            />
            <label htmlFor={id || name} className={CLASS_NAMES.label}>
              <Icon
                width={12}
                height={12}
                icon="check"
                className="m-auto"
                stroke="neutral-000"
              />
            </label>
          </>
        }
      />
    </div>
  )
);

export default Checkbox;
