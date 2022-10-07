import * as t from "io-ts";
import { Address } from "./Address";

export const SoleTraderInfo = t.intersection([
  t.type({
    trading_name: t.string,
    trading_address: Address,
  }),
  t.partial({
    national_insurance_number: t.string,
  }),
]);

export interface SoleTraderInfo {
  national_insurance_number?: string;
  trading_name: string;
  trading_address: Address;
}
