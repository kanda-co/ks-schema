import React, { type FunctionComponent } from "react";
import { BreakPoints, Button, Icon, Tag } from "@kanda-libs/ks-design-library";
import FormTheme from "~/components/FormTheme";
import Field from "~/field";
import useSearchInputProps from "./useSearchInputProps";
import { FIELD, BUTTON, CLASS_NAMES } from "./constants";

export interface SearchInputProps {
  query?: string;
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = function ({
  query = "",
  placeholder = "",
  onSearch,
}) {
  const { onChange, onSubmit, searchVisible, onToggleSearch, autoFocus } =
    useSearchInputProps(onSearch);

  return (
    <div className={CLASS_NAMES.wrapper}>
      <FormTheme variant="inline">
        <div className={CLASS_NAMES.innerWrapper}>
          {query && (
            <div
              onClick={() => {
                onSearch("");
              }}
            >
              <Tag className={CLASS_NAMES.tag} variant="solid" color="lavender">
                <>
                  {query}
                  <Icon icon="close" size={12} />
                </>
              </Tag>
            </div>
          )}
          {!query && (
            <form onSubmit={onSubmit}>
              {searchVisible ? (
                <div className={CLASS_NAMES.input}>
                  <BreakPoints
                    mobile={
                      <Field.UncontrolledInput
                        {...FIELD}
                        placeholder={placeholder}
                        defaultValue={query}
                        autoFocus={autoFocus}
                        onChange={onChange as (...args: unknown[]) => void}
                        onBlur={onToggleSearch}
                      />
                    }
                    desktop={
                      <Field.UncontrolledInput
                        {...FIELD}
                        defaultValue={query}
                        autoFocus={autoFocus}
                        onChange={onChange as (...args: unknown[]) => void}
                        onBlur={onToggleSearch}
                      />
                    }
                  />
                </div>
              ) : (
                <Button.Icon
                  id="staff-search-button"
                  onClick={() => {
                    onToggleSearch();
                  }}
                  {...BUTTON}
                />
              )}
            </form>
          )}
        </div>
      </FormTheme>
    </div>
  );
};

export default SearchInput;
