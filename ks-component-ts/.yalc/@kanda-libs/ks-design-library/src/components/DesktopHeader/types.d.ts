import type { CompanyItem } from '~/components/DesktopHeader/CompanyInfoPopover/types';
import type { FunctionComponent } from 'react';

export interface DesktopHeaderProps {
  items?: CompanyItem[];
  companyItems: CompanyItem[];
  /**
   * Notice banner to show
   */
  notice?: FunctionComponent;
  /**
   * Company name
   */
  companyName?: string;
  /**
   * Company profile picture url
   */
  companyProfilePicture?: string;
  /**
   * isLoading
   */
  isLoading?: boolean;
  /**
   * Display helpcrunch
   */
  help?: boolean;
  /**
   * Function for logging out
   */
  logout?: () => void;
  /**
   * Function for logging out
   */
  hideHomeLink?: boolean;
  /**
   * Display logo without link component
   */
  noLinkLogo?: boolean;
  showAvatar?: boolean;
}
