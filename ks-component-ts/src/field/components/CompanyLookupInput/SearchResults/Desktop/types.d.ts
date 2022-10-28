import { SelectedCompany } from "~/field/components/CompanyLookupInput/types";

export interface DesktopProps {
  /**
   * Company search field name
   */
  companySearchName: string;
  /**
   * Company focus field name
   */
  companyFocusName: string;
  handleSelect(company: SelectedCompany): void;
  noCompanyCallback?(query: string): void;
}
