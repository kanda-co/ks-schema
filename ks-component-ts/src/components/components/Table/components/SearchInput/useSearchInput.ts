import { FormEvent, useCallback, useState } from 'react';

export interface SearchInputHook {
  search: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function useSearchInput(
  onSearch: (search: string) => void,
): SearchInputHook {
  const [search, setSearch] = useState('');

  const onChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value);
    },
    [setSearch],
  );

  const onSubmit = useCallback(() => {
    onSearch(search);
  }, [search, onSearch]);

  return {
    search,
    onChange,
    onSubmit,
  };
}
