import type { Address } from "@kanda-libs/ks-frontend-services";

export const formatAddress = ({
  line_1,
  line_2,
  city,
  postcode,
}: Partial<Address>): string =>
  [line_1, line_2, city, postcode].filter(Boolean).join(", ");
