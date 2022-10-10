import * as t from "io-ts";

export const Address = t.intersection([
  t.type({
    line_1: t.string,
    city: t.string,
    country: t.string,
    postcode: t.string,
  }),
  t.partial({
    building_number: t.string,
    building_name: t.string,
    line_2: t.string,
    county: t.string,
    months_at_address: t.number,
  }),
]);

export interface Address {
  building_number?: string;
  building_name?: string;
  line_1: string;
  line_2?: string;
  city: string;
  county?: string;
  country: string;
  postcode: string;
  months_at_address?: number;
}
