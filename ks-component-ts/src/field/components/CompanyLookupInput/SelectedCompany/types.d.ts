export interface SelectedCompanyInputProps {
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
  placeholder: string;
  /**
   * City field name
   */
  cityName: string;
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
  removeSelected(...args: unknown[]): unknown;
  /**
   * Field remove selected label
   */
  removeSelectedLabel: string;
  /**
   * Sole trader button
   */
  selectedDisplay: "field" | "card";
}
