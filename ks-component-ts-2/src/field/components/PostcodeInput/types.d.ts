export interface Address {
  formattedAddress: string[];
}

export interface AddressApiData {
  postcode?: string;
  addresses?: Address[];
}

export interface PostcodeCallbackArgs extends AddressApiData {
  isLoading?: boolean;
}

export type PostcodeCallback = (args: PostcodeCallbackArgs) => void;

export interface PostcodeInputProps {
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
   * Field label
   */
  label?: string | JSX.Element | JSX.Element[] | null;
  /**
   * Field warning message
   */
  warning?: string | JSX.Element | JSX.Element[] | null;
  /**
   * icon name
   */
  icon?: string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
}
