import { useCallback, useEffect, useState } from "react";
import {
  StringIndexedObject,
  useFormContext,
  useWatch,
} from "@kanda-libs/ks-component-ts";
import type { Address } from "@kanda-libs/ks-frontend-services";
import get from "lodash.get";

import { ADDRESS_NAME, POSTCODE_NAME } from "./Address-constants";

export interface Addresses {
  addresses: Address[];
}

const flattenObject = (obj: any): any =>
  Object.keys(obj).reduce((flat, val) => {
    if (typeof obj[val] === "string")
      return {
        ...flat,
        [val]: obj[val],
      };
    return {
      ...flat,
      ...flattenObject(obj[val]),
    };
  }, {});

const getValidationConditions = (validation: any) =>
  Object.keys(validation).reduce(
    (validators, key) => ({
      ...validators,
      [key]: validation[key].value,
    }),
    {}
  );

const getValidationErrors = (validation: any) =>
  Object.keys(validation).reduce((validators, key) => {
    if (typeof validation[key].message === "string")
      return {
        ...validators,
        [key]: validation[key].message,
      };
    const messages = flattenObject(validation[key].message);
    return {
      ...validators,
      ...messages,
    };
  }, {});

const validateAddressSelect = (formValues: any, addressFieldName: string) => {
  console.log(formValues);
  if (!addressFieldName) return null;
  const address = get(formValues, addressFieldName);
  if (!address) return false;
  const selected = address?.selected;
  const line1 = address?.line_1;
  if (!selected) return false;
  if (selected && !line1) return false;
  return true;
};

const ContainerComponent = ({ children }: any) => {
  const [addresses, setAddresses] = useState<Addresses | null>(null);
  const [manual, setManual] = useState(false);

  const postcodeCallback = useCallback((results) => setAddresses(results), []);

  const [postcode, address] = useWatch({
    name: [POSTCODE_NAME, ADDRESS_NAME],
  });

  console.log(useWatch());

  const { setValue, getValues } = useFormContext();

  const showSelect = postcode && postcode !== "" && addresses;

  const addManualInput = () => setManual(!manual);

  useEffect(() => {
    if (
      !address?.line_1 ||
      !addresses?.addresses ||
      addresses?.addresses?.length === 0
    )
      return;
    const match = addresses.addresses.findIndex(
      (addr) => (addr as StringIndexedObject).line_1 === address.line_1
    );
    if (match === address?.selected) return;
    setValue(`${ADDRESS_NAME}.selected`, match);
  }, [address, addresses, setValue]);

  const validation = {
    validate: {
      value: () => validateAddressSelect(getValues(), "job.customer.address"),
      message:
        "You must select an address or enter the address details manually",
    },
  };

  const selectProps = {
    validationConditions: getValidationConditions(validation),
    validationErrors: getValidationErrors(validation),
  };

  return children({
    addresses,
    postcodeCallback,
    manual,
    addManualInput,
    showSelect,
    selectProps,
  });
};

ContainerComponent.displayName =
  "CreateJob-Desktop-Customer-Field-Address-container";

export default ContainerComponent;
