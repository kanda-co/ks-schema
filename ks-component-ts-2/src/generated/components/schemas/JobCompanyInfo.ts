import * as t from "io-ts";
import { BankAccount } from "./BankAccount";
import { ContactInfo } from "./ContactInfo";
import { Document } from "./Document";

export const JobCompanyInfo = t.intersection([
  t.type({
    company_name: t.string,
  }),
  t.partial({
    company_logo: Document,
    vat_number: t.string,
    bank_account: BankAccount,
    contact_info: ContactInfo,
  }),
]);

export interface JobCompanyInfo {
  company_name: string;
  company_logo?: Document;
  vat_number?: string;
  bank_account?: BankAccount;
  contact_info?: ContactInfo;
}
