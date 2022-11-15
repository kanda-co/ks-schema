import {
  StyleHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTrackBackground } from "react-range";

import { normalizeValue } from "./helpers";
import { RangeSliderProps } from "./types";

export type RangeSliderPropsHookArgs = Omit<RangeSliderProps, "step">;

export interface RangeSliderPropsHook {
  values: number | number[];
  handleChange: (values: number | number[]) => void;
  trackStyle: StyleHTMLAttributes<HTMLDivElement>;
}

export default function useRangeSliderProps({
  value,
  defaultValue,
  onChange,
  colors,
  min,
  max,
}: RangeSliderPropsHookArgs): RangeSliderPropsHook {
  const initialValue = value || defaultValue;

  const isArray = Array.isArray(initialValue);

  const [values, setValues] = useState(normalizeValue(initialValue));

  /**
   * Handles change event
   * @param {Array} newValues new values
   */
  const handleChange = useCallback(
    (newValues) => {
      if (onChange) {
        onChange(isArray ? newValues : newValues[0]);
      }

      setValues(newValues);
    },
    [onChange, isArray]
  );

  /**
   * Handles value change
   */
  useEffect(() => {
    setValues(normalizeValue(value));
  }, [value]);

  /**
   * Generates track styles
   */
  const trackStyle = useMemo(
    () =>
      ({
        background: getTrackBackground({
          values: values as number[],
          colors: colors as string[],
          min: min as number,
          max: max as number,
        }),
      } as StyleHTMLAttributes<HTMLDivElement>),
    [values, min, max, colors]
  );

  return {
    values,
    handleChange,
    trackStyle,
  };
}
