import React, { FunctionComponent } from "react";
import useAddressSelectProps from "./useAddressSelectProps";
import { AddressApiData } from "~/field/components/Address/types";
import FieldFormController from "~/field/components/FieldFormController";
import Select, { SelectProps } from "../../Select";

export interface AddressSelectProps {
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
}) {
  const selectProps = useAddressSelectProps(
    postcodeName,
    data
  ) as unknown as SelectProps;

  return (
    <FieldFormController register>
      {() => <Select {...selectProps} />}
    </FieldFormController>
  );
};

export default AddressSelect;
