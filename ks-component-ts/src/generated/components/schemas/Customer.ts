import * as t from "io-ts";
import { Address } from "./Address";

export const Customer = t.intersection([
  t.type({
    first_name: t.string,
    last_name: t.string,
    email: t.string,
    phone: t.string,
  }),
  t.partial({
    address: Address,
  }),
]);

export interface Customer {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address?: Address;
}
