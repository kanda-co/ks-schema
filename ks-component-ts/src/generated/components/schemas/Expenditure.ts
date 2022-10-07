import * as t from "io-ts";
import { Money } from "./Money";

export const Expenditure = t.partial({
  expenditure_type: t.union([
    t.literal("credit card"),
    t.literal("clothes"),
    t.literal("council tax and bills"),
    t.literal("child support agency"),
    t.literal("healthcare"),
    t.literal("holidays"),
  ]),
  monthly_amount: Money,
});

export interface Expenditure {
  expenditure_type?:
    | "credit card"
    | "clothes"
    | "council tax and bills"
    | "child support agency"
    | "healthcare"
    | "holidays";
  monthly_amount?: Money;
}
