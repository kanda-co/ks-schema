import * as t from "io-ts";
import { Address } from "./Address";

export const DirectorInfo = t.intersection([
  t.type({
    home_address: Address,
  }),
  t.partial({
    verification_status: t.union([
      t.literal("not_verified"),
      t.literal("verification_submitted"),
      t.literal("verification_declined"),
      t.literal("verified"),
    ]),
    date_of_birth: t.string,
  }),
]);

export interface DirectorInfo {
  verification_status?:
    | "not_verified"
    | "verification_submitted"
    | "verification_declined"
    | "verified";
  home_address: Address;
  date_of_birth?: string;
}
