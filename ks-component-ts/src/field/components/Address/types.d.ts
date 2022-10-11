export interface AddressApiResponseAddress {
  buildingNumber?: string;
  subBuildingNumber?: string;
  buildingName?: string;
  subBuildingName?: string;
  line1?: string;
  line2?: string;
  locality?: string;
  townOrCity?: string;
  county?: string;
  country?: string;
  formatted_address: string[];
  formattedAddress: string[];
}

export interface Address {
  formattedAddress: string[];
}

export interface AddressApiData {
  isLoading?: boolean;
  postcode?: string;
  addresses?: AddressApiResponseAddress[];
}

export type PostcodeCallbackArgs = AddressApiData;

export type PostcodeCallback = (args: PostcodeCallbackArgs) => void;

export interface PostcodeProps {
  /**
   * The api response from the address lookup service
   */
  data?: AddressApiData;
  /**
   * An error returned from the address lookup service
   */
  error?: string;
  /**
   * Whether the call to the address lookup service is validating
   */
  isValidating?: boolean;
  /**
   * Name of the input required for form to work
   */
  name: string;
  /**
   * Name of the input required for form to work
   */
  callback: PostcodeCallback;
  /**
   * icon name
   */
  icon?: string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Callback fired when the value is changed.
   */
  onPostcodeSearch?: (postcode: string) => void;
}
