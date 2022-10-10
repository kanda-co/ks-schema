import * as t from "io-ts";
import { Expenditure } from "./Expenditure";

export const FinanceDetails = t.partial({
  bankrupcy_or_iva_in_last_5_years: t.union([
    t.literal("yes"),
    t.literal("no"),
  ]),
  expenditures: t.array(Expenditure),
});

export interface FinanceDetails {
  bankrupcy_or_iva_in_last_5_years?: "yes" | "no";
  expenditures?: Array<Expenditure>;
}
