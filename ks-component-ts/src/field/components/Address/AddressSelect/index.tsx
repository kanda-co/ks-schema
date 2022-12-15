import React, { type FunctionComponent } from "react";
import useAddressSelectProps from "./useAddressSelectProps";
import { AddressApiData } from "~/field/components/Address/types";
import Select, { type SelectProps } from "../../Select";

export interface AddressSelectProps extends SelectProps {
  /**
   * Postcode field name
   */
  postcodeName: string;
  /**
   * Addresses data to select from
   */
  data: AddressApiData;
  /**
   * Field label
   */
  label?: string | JSX.Element | JSX.Element[];
  /**
   * Field warning message
   */
  warning?: string | JSX.Element | JSX.Element[];
  /**
   * icon name
   */
  icon?: string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
}

const AddressSelect: FunctionComponent<AddressSelectProps> = function ({
  postcodeName,
  data,
  ...rest
}) {
  const selectProps = useAddressSelectProps(
    postcodeName,
    data
  ) as unknown as SelectProps;

  return <Select {...selectProps} {...rest} disableDefaultValue={false} />;
};

export default AddressSelect;
