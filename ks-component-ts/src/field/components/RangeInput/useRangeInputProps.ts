import { useCallback, useEffect, useMemo, useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import clsx from "clsx";

import { BG_COLOR, CLASS_NAMES } from "./constants";

import { ErrorMessage } from "~/field/types";
import {
  RangeInputUncontrolledProps,
  TieStepsTo,
} from "./RangeInputUncontrolled";
import { chainStateK } from "fp-ts/lib/FromState";

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
  onSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sliderName: string;
  rawValue: string;
  value: string;
}

export default function useRangeInputProps(
  name: string,
  min: string,
  max: string,
  steps: string,
  tieStepsTo: TieStepsTo,
  formatter: (input: string) => string,
  prefix: string,
  suffix: string,
  error?: string | ErrorMessage,
  highlightLabel?: RangeInputUncontrolledProps["highlightLabel"]
): Hook {
  const sliderName = useMemo(() => `${name}__slider`, [name]);
  const [value, rawValue] = useWatch({ name: [name, sliderName] });
  const {
    setValue,
    formState: { defaultValues },
  } = useFormContext();

  const initialValue = useMemo(
    () => defaultValues?.[name],
    [defaultValues, name]
  );

  const ref = useRef<HTMLInputElement>(null);

  const diff = useMemo(() => parseInt(max, 10) - parseInt(min, 10), [max, min]);

  const numSteps = useMemo(
    () => Math.min(diff, parseInt(steps, 10)),
    [diff, steps]
  );

  const step = useMemo(
    () => Math.ceil((parseInt(max, 10) - parseInt(min, 10)) / numSteps),
    []
  );

  const maxInput = useMemo(() => {
    if (diff < 0) return "1";
    if (diff > 100) return "100";
    return String(diff);
  }, [diff]);

  const inputProps = useMemo(
    () => ({
      min: "0",
      max: maxInput,
      step: "1",
    }),
    [maxInput]
  );

  const tieMax = useCallback(
    (rawInputValue: string) => {
      const rawDiff = parseInt(maxInput, 10) - parseInt(rawInputValue, 10);
      const increment = rawDiff * step;
      return String(Math.max(parseInt(max, 10) - increment, parseInt(min, 10)));
    },
    [maxInput, step, max, min]
  );

  const tieMin = useCallback(
    (rawInputValue: string) => {
      const rawDiff = parseInt(rawInputValue, 10);
      const increment = rawDiff * step;
      return String(Math.min(parseInt(min, 10) + increment, parseInt(max, 10)));
    },
    [maxInput, step, max]
  );

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

  const onSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const sliderValue = e.target.value;
      setValue(sliderName, sliderValue);
    },
    [setValue, sliderName]
  );

  const getInitialSliderValue = useCallback(() => {
    if (maxInput === "1") return maxInput;
    if (!initialValue) return String(Math.ceil(parseInt(maxInput, 10) / 2));
    const parsedMin = parseInt(min, 10);
    const parsedMax = parseInt(max, 10);
    const parsedVal = parseInt(initialValue, 10);
    if (parsedVal >= parsedMax) {
      setValue(name, String(parsedMax));
      return "100";
    }
    if (parsedVal <= parsedMin) {
      setValue(name, String(parsedMin));
      return "0";
    }
    if (tieStepsTo === "max") {
      const initDiff = (parseInt(max, 10) - parseInt(initialValue, 10)) / step;
      return String(Math.round(parseInt(maxInput, 10) - initDiff));
    }
    return String(
      Math.round((parseInt(initialValue, 10) - parseInt(min, 10)) / step)
    );
  }, [initialValue, maxInput, setValue, name, min, max, step]);

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

  const initRef = useRef<boolean>(false);
  useEffect(() => {
    if (initRef.current) return;
    const initValue = getInitialSliderValue();
    setValue(sliderName, initValue);
    setTimeout(() => {
      initRef.current = true;
    }, 10);
  }, [setValue, sliderName, getInitialSliderValue]);

  useEffect(() => {
    if (!initRef.current) return;
    const newValue = tieStepsTo === "max" ? tieMax(rawValue) : tieMin(rawValue);
    setValue(name, newValue);
  }, [rawValue, tieStepsTo, setValue]);

  return {
    ref,
    inputProps,
    maxLabel,
    minLabel,
    currentLabel,
    classNames,
    onSliderChange,
    sliderName,
    value: value || "",
    rawValue: rawValue || "0",
  };
}
