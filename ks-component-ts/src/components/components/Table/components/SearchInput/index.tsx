import type { FunctionComponent } from 'react';
import useSearchInput from './useSearchInput';

export interface SearchInputProps {
  onSearch: (search: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = function ({
  onSearch,
}) {
  const { search, onChange, onSubmit } = useSearchInput(onSearch);

  return (
    <div className="flex flex-row gap-x-2">
      <span>Search:</span>
      <input type="text" value={search} onChange={onChange} />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default SearchInput;
