import type { Address } from "@kanda-libs/ks-frontend-services";

export interface SelectedCompanyProps extends Partial<Address> {
  /**
   * Company search field name
   */
  name: string;
  /**
   * Field selected label
   */
  selectedLabel: string;
  /**
   * Company search field label
   */
  placeholder?: string | JSX.Element;
  /**
   * City field name
   */
  cityName: string;
  /**
   * Building number field name
   */
  buildingNumberName: string;
  /**
   * Address line one field name
   */
  addressLineOneName: string;
  /**
   * Address line two field name
   */
  addressLineTwoName: string;
  /**
   * Postal code field name
   */
  postalCodeName: string;
  /**
   * Company number field name
   */
  companyNumberName: string;
  /**
   * Remove selected callback
   */
  removeSelected?: () => void;
  /**
   * Field remove selected label
   */
  removeSelectedLabel: string;
  /**
   * Sole trader button
   */
  selectedDisplay: "field" | "card";
}
