import { useFormContext, useWatch } from "react-hook-form";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { renderDisplayValue } from "~/field/components/BasicNumberInput/BasicNumberInputUncontrolled/helpers";
import { StringIndexedObject } from "~/types";

export interface BasicInputUncontrolledArgs {
  name?: string;
  prefix: string;
  suffix: string;
  formatForValue: (value: number) => number;
  formatForDisplay: (value: number) => number;
  initialOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  decimalScale: number;
  isAllowed?: (values: StringIndexedObject) => boolean;
}
export interface BasicInputUncontrolledPropsHook {
  currentValue: number;
  focused: boolean;
  setFocused: Dispatch<SetStateAction<boolean>>;
  displayValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useBasicInputUncontrolledProps({
  name,
  prefix,
  suffix,
  formatForValue,
  formatForDisplay,
  initialOnChange,
  decimalScale,
  isAllowed = () => true,
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
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const validValue = isAllowed({ value });

      if (!validValue) return;

      initialOnChange(e);

      if (value.length === 0) {
        setValue(name as string, undefined);
        return;
      }

      const nextValue = formatForValue(parseFloat(value)) || 0;
      const formattedNextValue = nextValue >= 0 ? nextValue : nextValue * -1;

      setValue(name as string, formattedNextValue);
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
