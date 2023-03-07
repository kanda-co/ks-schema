import { useCallback, useState } from "react";

export type BoundValueHook = [
  number,
  // Set value
  (amount?: number) => void,
  // Increment
  (amount?: number) => void,
  // Decrement
  (amount?: number) => void
];

export default function useBoundValue(
  min: number,
  max: number
): BoundValueHook {
  const [value, setValue] = useState(0);

  const onIncrement = useCallback(
    (amount = 1) => {
      const nextValue = value + amount;

      if (nextValue > max) {
        setValue(0);
      } else {
        setValue(value + amount);
      }
    },
    [value, setValue]
  );

  const onDecrement = useCallback(
    (amount = 1) => {
      const nextValue = value - amount;

      if (nextValue < min) {
        setValue(max);
      } else {
        setValue(value - amount);
      }
    },
    [value, setValue]
  );

  return [value, setValue, onIncrement, onDecrement];
}
