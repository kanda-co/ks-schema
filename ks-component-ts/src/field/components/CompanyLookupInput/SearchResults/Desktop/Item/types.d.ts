import type { InfoCompany } from "@kanda-libs/ks-frontend-services";

export interface ItemProps {
  /**
   * Handle select customer
   */
  handleSelect?: (company: InfoCompany) => void;
  /**
   * Loading state
   */
  isLoading?: boolean;
  searchWords?: string[];
  company?: InfoCompany;
}
