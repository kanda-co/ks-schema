import { SelectedCompanyInputProps } from "~/field/components/CompanyLookupInput/SelectedCompany/types";
import { useWatch } from "react-hook-form";
import { formatAddress } from "./helpers";

export type SelectedCompanyPropsHookArgs = Omit<
  SelectedCompanyInputProps,
  "selectedLabel" | "removeSelected" | "removeSelectedLabel" | "selectedDisplay"
>;

export interface SelectedCompanyPropsHook {
  companyName: string;
  companyNumber: string;
  address: string;
}

export default function useSelectedCompanyProps({
  name,
  companyNumberName,
  addressLineOneName,
  addressLineTwoName,
  postalCodeName,
  cityName,
}: SelectedCompanyPropsHookArgs): SelectedCompanyPropsHook {
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
