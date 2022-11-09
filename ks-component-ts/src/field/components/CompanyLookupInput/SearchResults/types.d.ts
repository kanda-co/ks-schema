import type { StringIndexedObject } from "@kanda-libs/ks-frontend-services";
import type { CompanyLookupInputSharedProps } from "../types";

export interface SearchResultsProps extends CompanyLookupInputSharedProps {
  modalId?: string;
  handleSelect?: (company?: StringIndexedObject) => void;
}

export interface ItemProps {
  /**
   * Handle select customer
   */
  handleSelect?: (company: StringIndexedObject) => void;
  /**
   * Loading state
   */
  isLoading?: boolean;
  searchWords?: string[];
  company?: StringIndexedObject;
}
