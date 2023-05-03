import type { FunctionComponent } from 'react';
import { Field, FormTheme } from '@kanda-libs/ks-component-ts';
import { BreakPoints, Button } from '@kanda-libs/ks-design-library';
import useSearchInputProps from './useSearchInputProps';
import { BUTTON, FIELD } from './constants';

export interface SearchInputProps {
  placeholder: string;
  query?: string;
  onSearch: (query: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = function ({
  placeholder,
  query = '',
  onSearch,
}) {
  const { onChange, searchVisible, onToggleSearch, autoFocus } =
    useSearchInputProps(query, onSearch);

  return (
    <div className="flex flex-row flex-1">
      <FormTheme variant="inline">
        <div className="h-10 flex w-full flex-col justify-center -ml-1.5">
          {searchVisible ? (
            <BreakPoints
              mobile={
                <Field.UncontrolledInput
                  {...FIELD}
                  placeholder={placeholder}
                  defaultValue={query}
                  onBlur={() => {
                    onToggleSearch();
                  }}
                  autoFocus={autoFocus}
                  onChange={onChange as (...args: unknown[]) => void}
                />
              }
              desktop={
                <Field.UncontrolledInput
                  {...FIELD}
                  defaultValue={query}
                  onBlur={() => {
                    onToggleSearch();
                  }}
                  autoFocus={autoFocus}
                  onChange={onChange as (...args: unknown[]) => void}
                />
              }
            />
          ) : (
            <Button.Icon
              id="staff-search-button"
              onClick={() => {
                onToggleSearch();
              }}
              {...BUTTON}
            />
          )}
        </div>
      </FormTheme>
    </div>
  );
};

export default SearchInput;
