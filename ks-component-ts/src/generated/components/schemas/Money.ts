import * as t from "io-ts";
import { Pence } from "./Pence";

export const Money = t.intersection([
  t.type({
    amount: Pence,
  }),
  t.partial({
    currency: t.literal("GBP"),
  }),
]);

export interface Money {
  currency?: "GBP";
  amount: Pence;
}
