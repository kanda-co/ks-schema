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
}
export interface BasicInputUncontrolledPropsHook {
  currentValue: number;
  focused: boolean;
  setFocused: Dispatch<SetStateAction<boolean>>;
  formattedValue: string;
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
}: BasicInputUncontrolledArgs): BasicInputUncontrolledPropsHook {
  const { setValue } = useFormContext();
  const [focused, setFocused] = useState(false);
  const [currentValue] = useWatch({
    name: [name as string],
  });

  const getDisplayValue = useCallback(
    (nextValue: string) =>
      renderDisplayValue({
        value: nextValue,
        prefix,
        suffix,
        formatForDisplay,
      }),
    [formatForDisplay]
  );

  const formattedValue = useMemo(
    () => getDisplayValue(currentValue),
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
    formattedValue,
    onChange,
  };
}
