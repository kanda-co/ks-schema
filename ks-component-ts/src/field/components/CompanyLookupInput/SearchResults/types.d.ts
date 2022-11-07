import type { InfoCompany } from "@kanda-libs/ks-frontend-services";
import type { CompanyLookupInputSharedProps } from "../types";

export interface SearchResultsProps extends CompanyLookupInputSharedProps {
  modalId?: string;
  handleSelect?: (company?: InfoCompany) => void;
}
