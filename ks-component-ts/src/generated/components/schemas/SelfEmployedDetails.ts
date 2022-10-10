import * as t from "io-ts";

export const SelfEmployedDetails = t.type({
  business_name: t.string,
  type_of_business: t.string,
  months_self_employed: t.number,
});

export interface SelfEmployedDetails {
  business_name: string;
  type_of_business: string;
  months_self_employed: number;
}
