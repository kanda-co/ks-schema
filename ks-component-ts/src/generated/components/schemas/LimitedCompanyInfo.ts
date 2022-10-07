import * as t from "io-ts";
import { Address } from "./Address";

export const LimitedCompanyInfo = t.intersection([
  t.type({
    company_name: t.string,
    company_address: Address,
    company_number: t.string,
  }),
  t.partial({
    trading_address: Address,
    vat_number: t.string,
  }),
]);

export interface LimitedCompanyInfo {
  company_name: string;
  company_address: Address;
  trading_address?: Address;
  company_number: string;
  vat_number?: string;
}
