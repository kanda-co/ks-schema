import React, { type FunctionComponent } from "react";
import { BreakPoints, Button, Tag } from "@kanda-libs/ks-design-library";
import FormTheme from "~/components/FormTheme";
import Field from "~/field";
import useSearchInputProps from "./useSearchInputProps";
import { BUTTON, FIELD } from "./constants";

export interface SearchInputProps {
  placeholder: string;
  query?: string;
  onSearch: (query: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = function ({
  placeholder,
  query = "",
  onSearch,
}) {
  const { onChange, autoFocus } = useSearchInputProps(query, onSearch);

  return (
    <div className="flex flex-row flex-1">
      <FormTheme variant="inline">
        <div className="h-10 flex w-full flex-col justify-center -ml-1.5">
          {query && (
            <Tag className="mr-2" variant="solid" color="lavender">
              <>{query}</>
            </Tag>
          )}
          {!query && (
            <BreakPoints
              mobile={
                <Field.UncontrolledInput
                  {...FIELD}
                  placeholder={placeholder}
                  defaultValue={query}
                  autoFocus={autoFocus}
                  onChange={onChange as (...args: unknown[]) => void}
                />
              }
              desktop={
                <Field.UncontrolledInput
                  {...FIELD}
                  defaultValue={query}
                  autoFocus={autoFocus}
                  onChange={onChange as (...args: unknown[]) => void}
                />
              }
            />
          )}
        </div>
      </FormTheme>
    </div>
  );
};

export default SearchInput;
