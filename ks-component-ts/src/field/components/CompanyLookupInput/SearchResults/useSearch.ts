import { useEffect, useMemo } from "react";
import { useDebounce } from "use-debounce";
import {
  useLoadData,
  services,
  InfoCompany,
} from "@kanda-libs/ks-frontend-services";
import usePreviousValue from "~/hooks/usePreviousValue";
import { DEBOUNCE_INTERVAL, SKELETON_DATA } from "./constants";

export interface SearchHook {
  results: InfoCompany[];
  isLoading: boolean;
  searchWords: string[];
  debouncedQuery: string;
}

const useSearch = (query = ""): SearchHook => {
  const [debouncedQuery] = useDebounce(query, DEBOUNCE_INTERVAL);
  const { previousValue: previousQuery, hasChanged: queryHasChanged } =
    usePreviousValue(debouncedQuery);

  const { data, isValidating, mutate } = useLoadData(
    (debouncedQuery &&
      services.infoCompany
        .infoCompany) as typeof services.infoCompany.infoCompany,
    { shouldRetryOnError: false },
    {
      params: {
        company_name: debouncedQuery,
      },
    }
  );

  useEffect(() => {
    if (previousQuery && queryHasChanged) {
      mutate();
    }
  }, [previousQuery, queryHasChanged]);

  const isLoading = !data || isValidating;

  const formattedData = data || [];

  const results = isValidating ? SKELETON_DATA : formattedData;

  const searchWords = useMemo(() => query.split(" "), [query]);

  return {
    results: results as InfoCompany[],
    isLoading,
    searchWords,
    debouncedQuery,
  };
};

export default useSearch;
