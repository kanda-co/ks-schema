import React, { useRef, type FunctionComponent } from "react";
import { SkeletonLoader } from "@kanda-libs/ks-design-library";
import useRangeInputProps from "./useRangeInputProps";

export interface RangeInputUncontrolledProps {
  min?: number;
  max?: number;
  steps?: number;
}

const RangeInputUncontrolled: FunctionComponent<RangeInputUncontrolledProps> =
  function ({ min = 0, max = 100, steps = 10 }) {
    const isLoading = false;
    const classNames = {
      container: "flex flex-col px-5 py-4 bg-neutral-100 rounded-lg",
      skeleton: "",
      label: "text-10-17-em-up text-green-600",
    };

    const { ref, inputProps, onInput } = useRangeInputProps(min, max, steps);

    return (
      <div className={classNames.container}>
        <SkeletonLoader
          wrapperClassName="flex w-full"
          containerClassName={classNames.skeleton}
          isLoading={isLoading}
          afterLoading={
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <p className={classNames.label}>min</p>
                <p className={classNames.label}>max</p>
              </div>
              <div className="flex flex-row relative">
                <div className="w-2.5 h-2.5 bg-green-600 rounded-full border border-neutral-000 absolute z-0 top-[5px] left-0" />
                <input
                  type="range"
                  ref={ref}
                  onInput={onInput}
                  {...inputProps}
                />
                <div className="w-2.5 h-2.5 bg-green-600 rounded-full border border-neutral-000 absolute z-0 top-[5px] right-0" />
              </div>
            </div>
          }
        />
      </div>
    );
  };

export default RangeInputUncontrolled;
