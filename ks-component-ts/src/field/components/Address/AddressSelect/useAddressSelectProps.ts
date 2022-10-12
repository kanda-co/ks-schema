import { useMemo, useCallback, useRef, useEffect, FormEvent } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { getOptions, checkPostcodesMatch, AddressOption } from "./helpers";
import { SELECT_ADDRESS_LABEL } from "./constants";

import type { AddressApiResponseAddress, AddressApiData } from "../types";

export interface AddressSelectPropsHook {
  onChange: (e: FormEvent) => void;
  options: AddressOption[];
  name: string;
  placeholder: string | null;
  isLoading?: boolean;
}

export default function useAddressSelectProps(
  postcodeName: string,
  data: AddressApiData
): AddressSelectPropsHook | null {
  const {
    isLoading,
    addresses,
    postcode: apiPostcode,
  } = data || {
    isLoading: null,
    addresses: null,
    postcode: null,
  };

  const options = useMemo(() => getOptions(addresses), [addresses]);

  const prefix = postcodeName
    ? postcodeName.split(".").slice(0, -1).join(".")
    : null;

  console.log("prefixprefixprefixprefixprefixprefix", prefix);

  const name = `${prefix}.selected`;

  const { setValue } = useFormContext();

  /**
   * Gets current form values
   */
  const [postcode, selected] = useWatch({
    name: [postcodeName, name],
  });

  const postCodeRef = useRef(postcode || null);
  const selectedRef = useRef(selected || 0);

  /**
   * Handles address change
   */
  const handleChange = useCallback(
    (e) => {
      console.log("prefixprefixprefixprefixprefixprefix", prefix);
      debugger;
      const id = parseInt(e.target.value, 10);

      selectedRef.current = e.target.value;

      const address = addresses && (addresses[id] as AddressApiResponseAddress);

      if (!address) return;

      setValue(
        `${prefix}.building_number`,
        address?.buildingNumber || address?.subBuildingNumber || undefined
      );
      setValue(
        `${prefix}.building_name`,
        address?.buildingName || address?.subBuildingName || undefined
      );
      setValue(
        `${prefix}.line_1`,
        address?.line1 || address?.formattedAddress[0]
      );
      setValue(
        `${prefix}.line_2`,
        address?.line2 ||
          address?.formattedAddress[1] ||
          address?.locality ||
          null
      );
      setValue(`${prefix}.city`, address?.townOrCity);
      setValue(`${prefix}.county`, address?.county);
      setValue(`${prefix}.country`, address?.country);
      setValue(`${prefix}.postcode`, apiPostcode);

      postCodeRef.current = apiPostcode;
    },
    [addresses, apiPostcode, prefix, setValue]
  );

  const placeholder = data?.postcode ? SELECT_ADDRESS_LABEL : null;

  useEffect(() => {
    if (!prefix || !postcode) return;

    if (checkPostcodesMatch(postCodeRef.current, postcode)) {
      setValue(name, selectedRef.current);
      return;
    }

    setValue(name, "");
  }, [prefix, postcode, name, setValue]);

  if (!prefix) return null;

  return {
    onChange: handleChange,
    options,
    name,
    placeholder,
    isLoading,
  };
}
