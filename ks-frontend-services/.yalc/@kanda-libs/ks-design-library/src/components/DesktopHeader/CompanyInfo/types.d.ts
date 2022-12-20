import type { CompanyItem } from '~/components/DesktopHeader/CompanyInfoPopover/types';

export interface CompanyInfoProps {
  companyName?: string;
  /**
   * Company profile picture url
   */
  companyProfilePicture?: string;
  isLoading?: boolean;
  /**
   * Items for the company menu
   */
  companyItems: CompanyItem[];
  /**
   * Function for logging out
   */
  logout?: () => void;
}
