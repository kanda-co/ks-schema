import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";
import { Document } from "./Document";

export const ContractAgreement = t.partial({
  contract: Document,
  agreed_terms_and_conditions: t.union([t.literal("yes"), t.literal("no")]),
  agreed_to_become_iar_of_kanda: t.union([t.literal("yes"), t.literal("no")]),
  print_name: t.string,
  signed_at: DateFromISOString,
});

export interface ContractAgreement {
  contract?: Document;
  agreed_terms_and_conditions?: "yes" | "no";
  agreed_to_become_iar_of_kanda?: "yes" | "no";
  print_name?: string;
  signed_at?: Date;
}
