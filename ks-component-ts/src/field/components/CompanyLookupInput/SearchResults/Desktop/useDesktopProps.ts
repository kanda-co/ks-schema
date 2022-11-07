import { useWatch } from "react-hook-form";
import type { DesktopProps } from "./types";
import useSearch from "../useSearch";
import { InfoCompany } from "@kanda-libs/ks-frontend-services";

export type DesktopPropsHookArgs = Omit<DesktopProps, "handleSelect">;

export interface DesktopPropsHook {
  visible: boolean;
  results?: InfoCompany[];
  isLoading: boolean;
  searchWords: string[];
  showButton: boolean;
  onClick: () => void;
}

export default function useDesktopProps({
  companySearchName,
  companyFocusName,
  noCompanyCallback,
}: DesktopPropsHookArgs): DesktopPropsHook | null {
  const [query, visible] = useWatch({
    name: [companySearchName as string, companyFocusName as string],
  });

  const { results, isLoading, searchWords, debouncedQuery } = useSearch(query);

  const onClick = () => {
    if (noCompanyCallback) noCompanyCallback(query);
  };

  const showButton =
    (!isLoading && results.length !== 0) ||
    (!isLoading && query && results.length === 0);

  if (!debouncedQuery && results.length === 0) return null;

  return {
    visible,
    results,
    isLoading,
    searchWords,
    showButton,
    onClick,
  };
}
