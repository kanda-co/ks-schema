import React, { type FunctionComponent, InputHTMLAttributes } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import { DefaultFormFieldProps } from "~/field/types";
import useRangeInputProps from "./useRangeInputProps";
import { defaultFormatter } from "./helpers";

export type TieStepsTo = "min" | "max";

export interface RangeInputUncontrolledProps
  extends InputHTMLAttributes<HTMLInputElement> {
  min?: string;
  max?: string;
  steps?: string;
  formatter?: (value: string) => string;
  prefix?: string;
  highlightLabel?: "min" | "max";
  showCurrentValueLabel?: boolean;
  suffix?: string;
  tieStepsTo?: TieStepsTo;
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
  tieStepsTo = "max",
  highlightLabel,
  showCurrentValueLabel = true,
  ...restProps
}) {
  const {
    ref,
    inputProps,
    minLabel,
    maxLabel,
    currentLabel,
    classNames,
    sliderName,
    onSliderChange,
    rawValue,
    value,
  } = useRangeInputProps(
    name,
    min,
    max,
    steps,
    tieStepsTo,
    formatter,
    prefix,
    suffix,
    error,
    highlightLabel
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
                  onSliderChange(e);
                }}
                name={sliderName}
                {...restProps}
                {...inputProps}
                value={rawValue}
              />
              <input
                name={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (onChange) onChange(e);
                }}
                style={{
                  display: "none",
                }}
                value={value}
              />
              <div className={classNames.cap} />
            </div>
            <div className={classNames.labels}>
              <p className={classNames.minLowerLabel}>{minLabel}</p>
              {currentLabel && showCurrentValueLabel && (
                <p className={classNames.lowerLabel}>{currentLabel}</p>
              )}
              <p className={classNames.maxLowerLabel}>{maxLabel}</p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default RangeInputUncontrolled;
