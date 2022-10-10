import * as t from "io-ts";
import { Document } from "./Document";
import { Money } from "./Money";
import { Pence } from "./Pence";

export const JobItem = t.intersection([
  t.type({
    title: t.string,
    quantity: Pence,
    price: Money,
    vat: Money,
  }),
  t.partial({
    description: t.string,
    vat_rate: t.union([
      t.literal("vat_not_set"),
      t.literal("exempted"),
      t.literal("0%"),
      t.literal("5%"),
      t.literal("20%"),
      t.literal("custom"),
    ]),
    quote_document: Document,
    style: t.union([t.literal("kanda"), t.literal("custom")]),
  }),
]);

export interface JobItem {
  title: string;
  description?: string;
  quantity: Pence;
  price: Money;
  vat_rate?: "vat_not_set" | "exempted" | "0%" | "5%" | "20%" | "custom";
  vat: Money;
  quote_document?: Document;
  style?: "kanda" | "custom";
}
