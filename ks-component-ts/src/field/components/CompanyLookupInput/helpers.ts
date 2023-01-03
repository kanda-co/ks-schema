import type { Address } from "@kanda-libs/ks-frontend-services";

export const formatAddress = ({
  building_number,
  line_1,
  line_2,
  city,
  postcode,
}: Partial<Address>): string =>
  [building_number, line_1, line_2, city, postcode].filter(Boolean).join(", ");
