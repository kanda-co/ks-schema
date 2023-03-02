import { useFormContext, useWatch } from "react-hook-form";
import React, { useCallback, useMemo } from "react";
import { StringIndexedObject } from "~/types";
import { makeIsAllowed } from "~/field/helpers";

export interface PercentageIncrementArgs {
  name?: string;
  inputIsAllowed?: (values: StringIndexedObject) => boolean;
  inputOnBlur?: (...event: any[]) => void;
  upperLimit?: number;
  lowerLimit?: number;
}

interface Disabled {
  decrement: boolean;
  increment: boolean;
}

export interface PercentageIncrementPropsHook {
  onIncrement: () => void;
  onDecrement: () => void;
  disabled: Disabled;
  isAllowed?: (value: any) => boolean;
  onBlur?: (...event: any[]) => void;
}

export default function usePercentageIncrement({
  name,
  inputIsAllowed,
  inputOnBlur,
  upperLimit = 50,
  lowerLimit = 10,
}: PercentageIncrementArgs): PercentageIncrementPropsHook {
  const { setValue } = useFormContext();

  const [currentValue] = useWatch({
    name: [name as string],
  });

  const isAllowed = useMemo(
    () => inputIsAllowed || makeIsAllowed(lowerLimit, upperLimit),
    [inputIsAllowed, lowerLimit, upperLimit]
  );

  const onIncrement = useCallback(() => {
    if (currentValue && currentValue >= upperLimit) return;
    const newValue = currentValue ? Math.round(currentValue + 1) : 1;
    const validValue = isAllowed({ value: newValue });
    if (!validValue) return;
    setValue(name as string, newValue);
  }, [currentValue, setValue, upperLimit, isAllowed]);

  const onDecrement = useCallback(() => {
    if (!currentValue || currentValue <= lowerLimit) return;
    const newValue = Math.round(currentValue - 1);
    const validValue = isAllowed({ value: newValue });
    if (!validValue) return;
    setValue(name as string, newValue);
  }, [currentValue, setValue, lowerLimit, isAllowed]);

  const disabled = useMemo(
    () => ({
      decrement: currentValue ? currentValue <= lowerLimit : true,
      increment: currentValue ? currentValue >= upperLimit : false,
    }),
    [currentValue, lowerLimit, upperLimit]
  );

  const onBlur = useCallback(
    (event: React.BaseSyntheticEvent) => {
      const validValue = isAllowed({ value: currentValue });
      if (!validValue) {
        if (currentValue >= upperLimit) {
          setValue(name as string, upperLimit);
          return;
        }
        if (currentValue <= lowerLimit) {
          setValue(name as string, lowerLimit);
          return;
        }
        setValue(name as string, (upperLimit + lowerLimit) / 2);
      }
      if (inputOnBlur) {
        inputOnBlur(event);
      }
    },
    [
      name,
      currentValue,
      isAllowed,
      upperLimit,
      lowerLimit,
      setValue,
      inputOnBlur,
    ]
  );

  return {
    onIncrement,
    onDecrement,
    disabled,
    isAllowed,
    onBlur,
  };
}
