import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "~/field/types";
import { BG_COLOR, CLASS_NAMES } from "./constants";
import useFormTheme from "~/hooks/useFormTheme";
import clsx from "clsx";

interface RangeClassNames {
  container: string;
  skeletonWrapper: string;
  skeletonContainer: string;
  labels: string;
  upperLabel: string;
  lowerLabel: string;
  rangeWrapper: string;
  cap: string;
}

interface InputProps {
  min: string;
  max: string;
  step: string;
}

export interface Hook {
  ref: React.RefObject<HTMLInputElement> | null;
  onInput: () => void;
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
  error?: string | ErrorMessage
): Hook {
  const value = Math.ceil((parseInt(max, 10) - parseInt(min, 10)) / 2);
  const [newValue, setNewValue] = useState<string>(String(value));

  const { makeErrorClasses } = useFormTheme();

  const { getValues } = useFormContext();

  const ref = useRef<HTMLInputElement>(null);

  const step = String(
    Math.ceil((parseInt(max, 10) - parseInt(min, 10)) / parseInt(steps, 10))
  );

  const inputProps = {
    min,
    max,
    step,
  };

  const onInput = useCallback(() => {
    if (!ref.current) return;
    const inputArr = Array.from(ref.current.children).filter(
      (element) => element.tagName === "INPUT"
    );
    if (inputArr.length === 0) return;
    const input = inputArr[0] as HTMLInputElement;
    const { value } = input;
    if (!value) return;
    setNewValue(value);
    const pct =
      ((parseInt(value, 10) - parseInt(min, 10)) /
        (parseInt(max, 10) - parseInt(min, 10))) *
      100;
    input.style.background = BG_COLOR.replaceAll("$PCT", String(pct));
  }, [min, max]);

  const currentLabel = useMemo(() => {
    if (!newValue) return undefined;
    return `${prefix}${formatter(newValue)}${suffix}`;
  }, [newValue]);

  const maxLabel = `${prefix}${formatter(String(max))}${suffix}`;
  const minLabel = `${prefix}${formatter(String(min))}${suffix}`;

  const classNames = {
    ...CLASS_NAMES,
    container: clsx(
      CLASS_NAMES.container,
      error ? "border-red-200" : "border-neutral-100"
    ),
  };

  useEffect(() => {
    if (!ref.current) return;
    const inputArr = Array.from(ref.current.children).filter(
      (element) => element.tagName === "INPUT"
    );
    if (inputArr.length === 0) return;
    const input = inputArr[0] as HTMLInputElement;
    const initialValue = getValues(name);
    const pct =
      ((parseInt(initialValue, 10) - parseInt(min, 10)) /
        (parseInt(max, 10) - parseInt(min, 10))) *
      100;
    input.style.background = BG_COLOR.replaceAll("$PCT", String(pct));
  }, [getValues, min, max]);

  return {
    ref,
    onInput,
    inputProps,
    maxLabel,
    minLabel,
    currentLabel,
    classNames,
  };
}
