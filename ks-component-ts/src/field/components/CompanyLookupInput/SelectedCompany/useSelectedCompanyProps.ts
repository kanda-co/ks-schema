import { SelectedCompanyProps } from "~/field/components/CompanyLookupInput/SelectedCompany/types";
import { useWatch } from "react-hook-form";
import { formatAddress } from "~/field/components/CompanyLookupInput/helpers";

export type SelectedCompanyPropsHookArgs = Omit<
  SelectedCompanyProps,
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
  buildingNumberName,
  addressLineOneName,
  addressLineTwoName,
  postalCodeName,
  cityName,
}: SelectedCompanyPropsHookArgs): SelectedCompanyPropsHook {
  const [
    companyName,
    companyNumber,
    building_number,
    line_1,
    line_2,
    postcode,
    city,
  ] = useWatch({
    name: [
      name,
      companyNumberName,
      buildingNumberName,
      addressLineOneName,
      addressLineTwoName,
      postalCodeName,
      cityName,
    ],
  }) as string[];

  const address = formatAddress({
    building_number,
    line_1,
    line_2,
    postcode,
    city,
  });

  return {
    companyName,
    companyNumber,
    address,
  };
}
