import { ChangeEvent, useCallback, useRef, useState } from "react";

export interface SearchInputPropsHook {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
}

export default function useSearchInputProps(
  query: string,
  onSearch: (query: string) => void
): SearchInputPropsHook {
  const autoFocusRef = useRef(false);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    [onSearch]
  );

  return {
    onChange,
    autoFocus: autoFocusRef.current,
  };
}
