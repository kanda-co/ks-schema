import { useFormContext, useWatch } from "react-hook-form";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { renderDisplayValue } from "~/field/components/BasicNumberInput/BasicNumberInputUncontrolled/helpers";

export interface BasicInputUncontrolledArgs {
  name?: string;
  prefix: string;
  suffix: string;
  formatForValue: (value: number) => number;
  formatForDisplay: (value: number) => number;
  // TODO: Proper type for this + FieldFormController onChange
  initialOnChange: (...args: unknown[]) => void;
  decimalScale: number;
}
export interface BasicInputUncontrolledPropsHook {
  currentValue: number;
  focused: boolean;
  setFocused: Dispatch<SetStateAction<boolean>>;
  displayValue: string;
  // TODO: Proper types
  onChange: (...args: unknown[]) => void;
}

export default function useBasicInputUncontrolledProps({
  name,
  prefix,
  suffix,
  formatForValue,
  formatForDisplay,
  initialOnChange,
  decimalScale,
}: BasicInputUncontrolledArgs): BasicInputUncontrolledPropsHook {
  const { setValue } = useFormContext();
  const [focused, setFocused] = useState(false);
  const [currentValue] = useWatch({
    name: [name as string],
  });

  const displayValue = useMemo(
    () =>
      renderDisplayValue({
        value: currentValue,
        prefix,
        suffix,
        formatForDisplay,
        decimalScale,
      }),
    [currentValue]
  );

  const onChange = useCallback(
    (e) => {
      initialOnChange(e);
      setValue(name as string, formatForValue(parseFloat(e.target.value)));
    },
    [currentValue]
  );

  return {
    currentValue,
    focused,
    setFocused,
    displayValue,
    onChange,
  };
}
