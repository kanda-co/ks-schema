import { SelectedCompanyInputProps } from "~/field/components/CompanyLookupInput/SelectedCompany/types";
import { useWatch } from "react-hook-form";
import { formatAddress } from "./helpers";

export type SelectedCompanyHookArgs = Omit<
  SelectedCompanyInputProps,
  "selectedLabel" | "removeSelected" | "removeSelectedLabel" | "selectedDisplay"
>;

export interface SelectedCompanyHook {
  companyName: string;
  companyNumber: string;
  address: string;
}

export default function useSelectedCompany({
  name,
  companyNumberName,
  addressLineOneName,
  addressLineTwoName,
  postalCodeName,
  cityName,
}: SelectedCompanyHookArgs): SelectedCompanyHook {
  const [
    companyName,
    companyNumber,
    addressLineOne,
    addressLineTwo,
    postalCode,
    city,
  ] = useWatch({
    name: [
      name,
      companyNumberName,
      addressLineOneName,
      addressLineTwoName,
      postalCodeName,
      cityName,
    ],
  });

  const address = formatAddress({
    addressLineOne,
    addressLineTwo,
    postalCode,
    city,
  });

  return {
    companyName,
    companyNumber,
    address,
  };
}
