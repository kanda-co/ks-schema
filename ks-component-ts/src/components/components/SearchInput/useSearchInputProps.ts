import { ChangeEvent, useCallback, useRef, useState } from 'react';

export interface SearchInputPropsHook {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchVisible: boolean;
  onToggleSearch: () => void;
  autoFocus: boolean;
}

export default function useSearchInputProps(
  query: string,
  onSearch: (query: string) => void,
): SearchInputPropsHook {
  const [searchVisible, setSearchVisible] = useState(false);

  const autoFocusRef = useRef(false);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    [onSearch],
  );

  /**
   * Toggle search visibility
   */
  const onToggleSearch = useCallback(() => {
    const focused = !searchVisible;

    /**
     * We don't want to hide the search input when a query is present
     */
    if (!focused && query) {
      return;
    }

    autoFocusRef.current = focused;
    setSearchVisible(focused);
  }, [searchVisible, setSearchVisible, query]);

  return {
    onChange,
    searchVisible,
    onToggleSearch,
    autoFocus: autoFocusRef.current,
  };
}
