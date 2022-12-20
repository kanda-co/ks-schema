export interface CompanyItem {
  active?: boolean;
  name: string;
  href?: string;
  target?: string;
  to?: string;
  onClick?: () => void;
}
