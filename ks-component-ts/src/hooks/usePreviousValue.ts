import { useEffect, useState } from "react";

export interface PreviousValueHook<T> {
  previousValue?: T;
  hasChanged: boolean;
}

export default function usePreviousValue<T = string>(
  value: T
): PreviousValueHook<T> {
  const [initialRender, setInitialRender] = useState(true);
  const [previousValue, setPreviousValue] = useState<T | undefined>();
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (!initialRender && value) {
      setPreviousValue((currentPreviousValue) => {
        if (currentPreviousValue !== value) {
          setHasChanged(true);
        }
        return value;
      });
    } else {
      setInitialRender(false);
    }
  }, [value]);

  return { previousValue, hasChanged };
}
