import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";
import { Address } from "./Address";

export const Identity = t.intersection([
  t.type({
    first_name: t.string,
    last_name: t.string,
    email: t.string,
    mobile: t.string,
    home_address: Address,
  }),
  t.partial({
    date_of_birth: DateFromISOString,
  }),
]);

export interface Identity {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  date_of_birth?: Date;
  home_address: Address;
}
