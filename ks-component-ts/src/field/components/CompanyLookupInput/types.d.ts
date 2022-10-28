export interface SelectedCompanyAddress {
  premises?: string;
  addressLine1?: string;
  addressLine2?: string;
  locality?: string;
  region?: string;
  country?: string;
  postalCode?: string;
}

export interface SelectedCompany {
  title?: string;
  companyName?: string;
  companyNumber?: string;
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  postalCode?: string;
  address: SelectedCompanyAddress;
}

export interface CompanyApiResponse {
  items: SelectedCompany[];
}
