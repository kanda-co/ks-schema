import { useMemo } from "react";
import { useDebounce } from "use-debounce";
import {
  useLoadData,
  services,
  InfoCompany,
  Service,
} from "@kanda-libs/ks-frontend-services";
import { StringIndexedObject } from "~/types";
import { DEBOUNCE_INTERVAL, SKELETON_DATA } from "./constants";
import { formatData } from "./helpers";
import { CompanyApiResponse } from "~/field/components/CompanyLookupInput/types";

export interface SearchHook {
  results: InfoCompany[];
  isLoading: boolean;
  searchWords: string[];
  debouncedQuery: string;
}

const useSearch = (query = ""): SearchHook => {
  const [debouncedQuery] = useDebounce(query, DEBOUNCE_INTERVAL);

  const { data, isValidating } = useLoadData(
    (debouncedQuery && services.infoCompany.infoCompany) as unknown as Service<
      CompanyApiResponse,
      StringIndexedObject,
      StringIndexedObject
    >,
    { shouldRetryOnError: false }
  );

  const isLoading = !data;

  const formattedData = useMemo(() => (data ? formatData(data) : []), [data]);

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
