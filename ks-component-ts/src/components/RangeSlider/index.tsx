import React, { type FunctionComponent } from "react";
import { Range } from "react-range";

import type { RangeSliderProps } from "./types";
import { CLASS_NAMES, DEFAULT_COLORS } from "./constants";
import useRangeSliderProps from "./useRangeSliderProps";
import Track from "~/components/RangeSlider/Track";
import Thumb from "~/components/RangeSlider/Thumb";

const RangeSlider: FunctionComponent<RangeSliderProps> = function ({
  value,
  defaultValue,
  step = 1,
  max = 100,
  min = 0,
  colors = DEFAULT_COLORS,
  onChange,
}) {
  const { handleChange, values, trackStyle } = useRangeSliderProps({
    value,
    defaultValue,
    max,
    min,
    colors,
    onChange,
  });

  return (
    <div className={CLASS_NAMES.container}>
      <Range
        values={values as number[]}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <Track {...props} trackStyle={trackStyle}>
            {children}
          </Track>
        )}
        renderThumb={({ props }) => <Thumb {...props} />}
      />
    </div>
  );
};

export default RangeSlider;
