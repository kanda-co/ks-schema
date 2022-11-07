import { InputHTMLAttributes } from "react";
import { DefaultFormFieldProps, FieldInfoWrapperProps } from "~/field/types";

export interface AddressApiResponseAddress {
  building_number?: string;
  sub_building_number?: string;
  building_name?: string;
  sub_building_name?: string;
  town_or_city?: string;
  line1?: string;
  line2?: string;
  locality?: string;
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

export type PostcodeBaseProps<T> = DefaultFormFieldProps<T> &
  FieldInfoWrapperProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, "autoComplete">;

export type PostcodeProps = PostcodeBaseProps<{
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
  name?: string;
  /**
   * Name of the input required for form to work
   */
  callback?: PostcodeCallback;
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
  /**
   * Placeholder text
   */
  placeholder?: string | JSX.Element;
}>;
