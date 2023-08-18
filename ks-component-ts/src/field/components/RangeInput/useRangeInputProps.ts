import { useEffect, useMemo, useRef } from "react";
import { useWatch } from "react-hook-form";
import clsx from "clsx";

import { BG_COLOR, CLASS_NAMES } from "./constants";

import { ErrorMessage } from "~/field/types";
import { RangeInputUncontrolledProps } from "./RangeInputUncontrolled";

interface RangeClassNames {
  container: string;
  skeletonWrapper: string;
  skeletonContainer: string;
  labels: string;
  upperLabel: string;
  lowerLabel: string;
  rangeWrapper: string;
  minLowerLabel: string;
  maxLowerLabel: string;
  cap: string;
}

interface InputProps {
  min: string;
  max: string;
  step: string;
}

export interface Hook {
  ref: React.RefObject<HTMLInputElement> | null;
  inputProps: InputProps;
  maxLabel: string;
  minLabel: string;
  currentLabel?: string;
  classNames: RangeClassNames;
}

export default function useRangeInputProps(
  name: string,
  min: string,
  max: string,
  steps: string,
  formatter: (input: string) => string,
  prefix: string,
  suffix: string,
  error?: string | ErrorMessage,
  highlightLabel?: RangeInputUncontrolledProps["highlightLabel"]
): Hook {
  const value = useWatch({ name });

  const ref = useRef<HTMLInputElement>(null);

  const step = String(
    Math.ceil((parseInt(max, 10) - parseInt(min, 10)) / parseInt(steps, 10))
  );

  const inputProps = {
    min,
    max,
    step,
  };

  const currentLabel = useMemo(() => {
    if (!value) return undefined;
    return `${prefix}${formatter(value)}${suffix}`;
  }, [value]);

  const maxLabel = `${prefix}${formatter(String(max))}${suffix}`;
  const minLabel = `${prefix}${formatter(String(min))}${suffix}`;

  const classNames = {
    ...CLASS_NAMES,
    container: clsx(
      CLASS_NAMES.container,
      error ? "border-red-200" : "border-neutral-100"
    ),
    minLowerLabel: clsx(
      CLASS_NAMES.lowerLabel,
      highlightLabel === "min" && CLASS_NAMES.highlightedLowerLabel
    ),
    maxLowerLabel: clsx(
      CLASS_NAMES.lowerLabel,
      highlightLabel === "max" && CLASS_NAMES.highlightedLowerLabel
    ),
  };

  useEffect(() => {
    if (!ref.current) return;
    const inputArr = Array.from(ref.current.children).filter(
      (element) => element.tagName === "INPUT"
    );
    if (inputArr.length === 0) return;
    const input = inputArr[0] as HTMLInputElement;
    const pct =
      ((parseInt(value, 10) - parseInt(min, 10)) /
        (parseInt(max, 10) - parseInt(min, 10))) *
      100;
    input.style.background = BG_COLOR.replaceAll("$PCT", String(pct));
  }, [value, min, max]);

  return {
    ref,
    inputProps,
    maxLabel,
    minLabel,
    currentLabel,
    classNames,
  };
}
