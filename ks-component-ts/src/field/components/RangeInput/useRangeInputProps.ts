import { useCallback, useMemo, useRef, useState } from "react";
import { BG_COLOR } from "./constants";

interface InputProps {
  min: string;
  max: string;
  step: string;
}

export interface Hook {
  newValue: string;
  ref: React.RefObject<HTMLInputElement> | null;
  onInput: () => void;
  inputProps: InputProps;
  maxLabel: string;
  minLabel: string;
  currentLabel?: string;
}

export default function useRangeInputProps(
  value: string,
  min: string,
  max: string,
  steps: string,
  formatter: (input: string) => string,
  prefix: string,
  suffix: string
): Hook {
  const [newValue, setNewValue] = useState<string>(String(value));

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
    const { value, min, max } = input;
    if (!value || !min || !max) return;
    setNewValue(value);
    const pct =
      ((parseInt(value, 10) - parseInt(min, 10)) /
        (parseInt(max, 10) - parseInt(min, 10))) *
      100;
    input.style.background = BG_COLOR.replaceAll("$PCT", String(pct));
  }, []);

  const currentLabel = useMemo(() => {
    if (!newValue) return undefined;
    return `${prefix}${formatter(newValue)}${suffix}`;
  }, [newValue]);

  const maxLabel = `${prefix}${formatter(String(max))}${suffix}`;
  const minLabel = `${prefix}${formatter(String(min))}${suffix}`;

  return {
    newValue,
    ref,
    onInput,
    inputProps,
    maxLabel,
    minLabel,
    currentLabel,
  };
}
