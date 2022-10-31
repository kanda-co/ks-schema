import type { SelectedCompany, CompanyLookupInputSharedProps } from "../types";

export interface SearchResultsProps extends CompanyLookupInputSharedProps {
  modalId?: string;
  handleSelect: (company: SelectedCompany) => void;
}
