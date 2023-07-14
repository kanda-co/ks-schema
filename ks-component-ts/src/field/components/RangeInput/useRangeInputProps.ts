import { useRef } from "react";
import { BG_COLOR } from "./constants";

interface InputProps {
  min: string;
  max: string;
  step: string;
}

export interface Hook {
  ref: React.RefObject<HTMLInputElement> | null;
  onInput: () => void;
  inputProps: InputProps;
}

export default function useRangeInputProps(
  min: number,
  max: number,
  steps: number
): Hook {
  const ref = useRef<HTMLInputElement>(null);

  const step = Math.ceil((max - min) / steps);

  const inputProps = {
    min: String(min),
    max: String(max),
    step: String(step),
  };

  const onInput = () => {
    if (!ref.current) return;
    const { value, min, max } = ref.current;
    if (!value || !min || !max) return;
    const pct =
      ((parseInt(value, 10) - parseInt(min, 10)) /
        (parseInt(max, 10) - parseInt(min, 10))) *
      100;
    ref.current.style.background = BG_COLOR.replaceAll("$PCT", String(pct));
  };

  return {
    ref,
    onInput,
    inputProps,
  };
}
