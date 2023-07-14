import React, { useRef, type FunctionComponent } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import useRangeInputProps from "./useRangeInputProps";

export interface RangeInputUncontrolledProps {
  value?: string;
  min?: string;
  max?: string;
  steps?: string;
  formatter?: (value: string) => string;
  prefix?: string;
  suffix?: string;
}

const defaultFormatter = (value: string) => value;

const RangeInputUncontrolled: FunctionComponent<RangeInputUncontrolledProps> =
  function ({
    value = "50",
    min = "0",
    max = "100",
    steps = "100",
    formatter = defaultFormatter,
    prefix = "",
    suffix = "",
  }) {
    const isLoading = false;
    const classNames = {
      container: "flex flex-col px-5 py-4 bg-neutral-100 rounded-lg",
      skeleton: "",
      upperLabel: "text-10-17-em-up text-green-600",
      lowerLabel:
        "text-12-18-em text-green-600 first:text-neutral-500 last:text-neutral-500 w-20 min-w-20 text-center first:text-left last:text-right",
    };

    const {
      newValue,
      ref,
      inputProps,
      onInput,
      minLabel,
      maxLabel,
      currentLabel,
    } = useRangeInputProps(value, min, max, steps, formatter, prefix, suffix);

    return (
      <div className={classNames.container}>
        <SkeletonLoader
          wrapperClassName="flex w-full"
          containerClassName={classNames.skeleton}
          isLoading={isLoading}
          afterLoading={
            <div className="flex flex-col">
              <div className="flex flex-row justify-between mb-1">
                <p className={classNames.upperLabel}>min</p>
                <p className={classNames.upperLabel}>max</p>
              </div>
              <div className="flex flex-row relative" ref={ref}>
                <div className="w-2.5 h-2.5 bg-green-600 rounded-full border border-neutral-000 absolute z-0 top-[5px] left-0" />
                <input
                  type="range"
                  onInput={onInput}
                  value={newValue}
                  {...inputProps}
                />
                <div className="w-2.5 h-2.5 bg-green-600 rounded-full border border-neutral-000 absolute z-0 top-[5px] right-0" />
              </div>
              <div className="flex flex-row justify-between mt-1">
                <p className={classNames.lowerLabel}>{minLabel}</p>
                {currentLabel && (
                  <p className={classNames.lowerLabel}>{currentLabel}</p>
                )}
                <p className={classNames.lowerLabel}>{maxLabel}</p>
              </div>
            </div>
          }
        />
      </div>
    );
  };

export default RangeInputUncontrolled;
