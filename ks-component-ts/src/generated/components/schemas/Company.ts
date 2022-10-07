import * as t from "io-ts";
import { AvailableRate } from "./AvailableRate";
import { BankAccount } from "./BankAccount";
import { CompanyInfo } from "./CompanyInfo";
import { ContactInfo } from "./ContactInfo";
import { Document } from "./Document";
import { LimitedCompanyInfo } from "./LimitedCompanyInfo";
import { Metadata } from "./Metadata";
import { SolarCompanyInfo } from "./SolarCompanyInfo";
import { SoleTraderInfo } from "./SoleTraderInfo";
import { UserType } from "./UserType";

export const Company = t.intersection([
  t.type({
    company_type: t.union([
      t.literal("limited_company"),
      t.literal("sole_trader"),
    ]),
  }),
  t.partial({
    id: t.string,
    cid: t.string,
    oid: t.string,
    aid: t.string,
    emails: t.array(t.string),
    users: t.array(UserType),
    company_info: CompanyInfo,
    solar_company_info: SolarCompanyInfo,
    limited_company_info: LimitedCompanyInfo,
    sole_trader_info: SoleTraderInfo,
    available_rates: t.array(AvailableRate),
    quote_preference: t.union([
      t.literal("no_preference"),
      t.literal("kanda"),
      t.literal("custom"),
    ]),
    skip_deposit: t.union([t.literal("Yes"), t.literal("No")]),
    lifecycle: t.union([
      t.literal("registered"),
      t.literal("subscribed"),
      t.literal("director_info_provided"),
      t.literal("onboarded"),
      t.literal("insurance_uploaded"),
      t.literal("completed_setup"),
      t.literal("verified"),
      t.literal("declined"),
    ]),
    billing: t.union([
      t.literal("legacy"),
      t.literal("trial"),
      t.literal("pending"),
      t.literal("referred"),
      t.literal("subscribed"),
      t.literal("recurring_payment_failed_1"),
      t.literal("recurring_payment_failed_2"),
      t.literal("recurring_payment_failed_3"),
      t.literal("suspended"),
      t.literal("cancelled"),
    ]),
    referral_code: t.string,
    company_logo: Document,
    bank_account: BankAccount,
    contact_info: ContactInfo,
    metadata: Metadata,
  }),
]);

export interface Company {
  id?: string;
  cid?: string;
  oid?: string;
  aid?: string;
  emails?: Array<string>;
  users?: Array<UserType>;
  company_info?: CompanyInfo;
  solar_company_info?: SolarCompanyInfo;
  company_type: "limited_company" | "sole_trader";
  limited_company_info?: LimitedCompanyInfo;
  sole_trader_info?: SoleTraderInfo;
  available_rates?: Array<AvailableRate>;
  quote_preference?: "no_preference" | "kanda" | "custom";
  skip_deposit?: "Yes" | "No";
  lifecycle?:
    | "registered"
    | "subscribed"
    | "director_info_provided"
    | "onboarded"
    | "insurance_uploaded"
    | "completed_setup"
    | "verified"
    | "declined";
  billing?:
    | "legacy"
    | "trial"
    | "pending"
    | "referred"
    | "subscribed"
    | "recurring_payment_failed_1"
    | "recurring_payment_failed_2"
    | "recurring_payment_failed_3"
    | "suspended"
    | "cancelled";
  referral_code?: string;
  company_logo?: Document;
  bank_account?: BankAccount;
  contact_info?: ContactInfo;
  metadata?: Metadata;
}
