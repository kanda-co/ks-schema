import React, { ForwardedRef, forwardRef } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import Container from "./Container";
import { type HandleProps } from "../types";

const Switch = forwardRef<JSX.Element, HandleProps>(
  ({ id, name, isLoading, small = false, ...restProps }, ref) => (
    <Container small={small}>
      {({ classNames, skeletons }) => (
        <div className={classNames.container}>
          <SkeletonLoader
            isLoading={isLoading}
            {...skeletons}
            afterLoading={
              <React.Fragment>
                <input
                  {...restProps}
                  ref={ref as ForwardedRef<HTMLInputElement>}
                  type="checkbox"
                  name={name}
                  id={id || name}
                  className={classNames.checkBox}
                />
                <label htmlFor={id || name} className={classNames.label}>
                  <span />
                </label>
              </React.Fragment>
            }
          />
        </div>
      )}
    </Container>
  )
);

export default Switch;
