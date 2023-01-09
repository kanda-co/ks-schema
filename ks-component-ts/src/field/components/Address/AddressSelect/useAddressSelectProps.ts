import {
  useMemo,
  useCallback,
  useRef,
  useEffect,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { getOptions, checkPostcodesMatch, type AddressOption } from "./helpers";

import type { AddressApiResponseAddress, AddressApiData } from "../types";

export interface AddressSelectPropsHook {
  onChange: (e: FormEvent) => void;
  options: AddressOption[];
  name: string;
  isLoading?: boolean;
}

export default function useAddressSelectProps(
  postcodeName: string,
  data: AddressApiData
): AddressSelectPropsHook | {} {
  const {
    isLoading,
    addresses,
    postcode: apiPostcode,
  } = data || {
    isLoading: null,
    addresses: [],
    postcode: null,
  };

  const options = useMemo(() => getOptions(addresses), [addresses]);

  const prefix = postcodeName
    ? postcodeName.split(".").slice(0, -1).join(".")
    : null;

  const name = `${prefix}.selected`;

  const { setValue } = useFormContext();

  /**
   * Gets current form values
   */
  const [postcode, selected] = useWatch({
    name: [postcodeName, name],
  });

  const postCodeRef = useRef(postcode || null);
  const selectedRef = useRef(selected || undefined);

  /**
   * Handles address change
   */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const id = parseInt(e.target.value, 10);

      selectedRef.current = id;

      const address = addresses && (addresses[id] as AddressApiResponseAddress);

      if (!address) return;

      setValue(
        `${prefix}.building_number`,
        address?.building_number || address?.sub_building_number || undefined
      );
      setValue(
        `${prefix}.building_name`,
        address?.building_name || address?.sub_building_name || undefined
      );
      setValue(
        `${prefix}.line_1`,
        address?.line1 || address?.formatted_address[0]
      );
      setValue(
        `${prefix}.line_2`,
        address?.line2 ||
          address?.formatted_address[1] ||
          address?.locality ||
          null
      );
      setValue(`${prefix}.city`, address?.town_or_city);
      setValue(`${prefix}.county`, address?.county);
      setValue(`${prefix}.country`, address?.country);
      setValue(`${prefix}.postcode`, apiPostcode);

      postCodeRef.current = apiPostcode;
    },
    [addresses, apiPostcode, prefix, setValue]
  );

  useEffect(() => {
    if (!prefix || !postcode) return;

    if (checkPostcodesMatch(postCodeRef.current, postcode)) {
      setValue(name, selectedRef.current);
      return;
    }

    setValue(name, null);
  }, [prefix, postcode, name, setValue]);

  if (!prefix) return {};

  return {
    onChange: handleChange,
    options,
    name,
    isLoading,
  };
}
