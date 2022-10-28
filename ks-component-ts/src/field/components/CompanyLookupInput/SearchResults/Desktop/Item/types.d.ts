import { SelectedCompany } from "~/field/components/CompanyLookupInput/types";

export interface ItemProps {
  /**
   * Handle select customer
   */
  handleSelect(company: SelectedCompany): void;
  /**
   * Loading state
   */
  isLoading?: boolean;
  searchWords?: string[];
  company?: SelectedCompany;
}
