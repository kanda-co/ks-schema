import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import type { SearchResultsProps } from "../types";
import useSearch from "../useSearch";
import { StringIndexedObject } from "~/types";

export interface ContainerChildrenArgs {
  results: StringIndexedObject[];
  isLoading: boolean;
  searchWords: string[];
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  showButton: boolean;
  onClick: () => void;
}

export interface ContainerProps
  extends Pick<SearchResultsProps, "noCompanyCallback" | "companySearchName"> {
  handleClose: () => void;
  children: (args: ContainerChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<ContainerProps> = function ({
  handleClose,
  noCompanyCallback,
  companySearchName,
  children,
}) {
  const [query, setQuery] = useState("");
  const { setValue, getValues } = useFormContext();
  const { results, isLoading, searchWords } = useSearch(query);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target?.value as string);
    if (companySearchName)
      setValue(companySearchName, e.target?.value as string);
  };

  const showButton = !!(
    (!isLoading && results.length !== 0) ||
    (query && !isLoading && results.length === 0)
  );

  const onClick = () => {
    handleClose();
    if (noCompanyCallback) noCompanyCallback(query);
    setValue(companySearchName as string, query);
  };

  const initRef = useRef<boolean>(false);
  useEffect(() => {
    if (!companySearchName || initRef.current) return;
    const value = getValues(companySearchName);
    initRef.current = true;
    if (!value) return;
    setQuery(value);
  }, [getValues, companySearchName]);

  return children({
    results,
    isLoading,
    searchWords,
    handleSearch,
    showButton,
    onClick,
  });
};

export default Container;
