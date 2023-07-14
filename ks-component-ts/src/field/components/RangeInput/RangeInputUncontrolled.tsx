import React, { type FunctionComponent, InputHTMLAttributes } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import { DefaultFormFieldProps } from "~/field/types";
import useRangeInputProps from "./useRangeInputProps";
import { defaultFormatter } from "./helpers";

export interface RangeInputUncontrolledProps
  extends InputHTMLAttributes<HTMLInputElement> {
  min?: string;
  max?: string;
  steps?: string;
  formatter?: (value: string) => string;
  prefix?: string;
  suffix?: string;
}

const RangeInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<RangeInputUncontrolledProps>
> = function ({
  forwardRef,
  error,
  isLoading,
  onChange,
  min = "0",
  max = "100",
  steps = "100",
  formatter = defaultFormatter,
  prefix = "",
  suffix = "",
  name = "",
  ...restProps
}) {
  const {
    ref,
    inputProps,
    onInput,
    minLabel,
    maxLabel,
    currentLabel,
    classNames,
  } = useRangeInputProps(
    name,
    min,
    max,
    steps,
    formatter,
    prefix,
    suffix,
    error
  );

  return (
    <div className={classNames.container}>
      <SkeletonLoader
        wrapperClassName={classNames.skeletonWrapper}
        height={59}
        containerClassName={classNames.skeletonContainer}
        isLoading={isLoading}
        afterLoading={
          <>
            <div className={classNames.labels}>
              <p className={classNames.upperLabel}>min</p>
              <p className={classNames.upperLabel}>max</p>
            </div>
            <div className={classNames.rangeWrapper} ref={ref}>
              <div className={classNames.cap} />
              <input
                type="range"
                ref={forwardRef}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (onChange) onChange(e);
                  onInput();
                }}
                name={name}
                {...restProps}
                {...inputProps}
              />
              <div className={classNames.cap} />
            </div>
            <div className={classNames.labels}>
              <p className={classNames.lowerLabel}>{minLabel}</p>
              {currentLabel && (
                <p className={classNames.lowerLabel}>{currentLabel}</p>
              )}
              <p className={classNames.lowerLabel}>{maxLabel}</p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default RangeInputUncontrolled;
