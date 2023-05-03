import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";

export interface SearchInputPropsHook {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
  searchVisible: boolean;
  onToggleSearch: () => void;
  autoFocus: boolean;
}

export default function useSearchInputProps(
  onSearch: (query: string) => void
): SearchInputPropsHook {
  const [searchVisible, setSearchVisible] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  const autoFocusRef = useRef(false);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCurrentQuery(event.target.value);
    },
    [onSearch]
  );

  /**
   * Toggle search visibility
   */
  const onToggleSearch = useCallback(() => {
    const focused = !searchVisible;

    onSearch(currentQuery);
    setCurrentQuery("");

    autoFocusRef.current = focused;
    setSearchVisible(focused);
  }, [searchVisible, setSearchVisible, currentQuery, onSearch]);

  /**
   * Handle setting the search on form submit
   */
  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onSearch(currentQuery);
    },
    [currentQuery, onSearch]
  );

  return {
    onChange,
    onSubmit,
    searchVisible,
    onToggleSearch,
    autoFocus: autoFocusRef.current,
  };
}
