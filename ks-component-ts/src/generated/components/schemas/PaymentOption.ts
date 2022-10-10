import * as t from "io-ts";
import { Money } from "./Money";

export const PaymentOption = t.type({
  payment_method: t.union([
    t.literal("cash"),
    t.literal("card"),
    t.literal("loan"),
  ]),
  amount: Money,
});

export interface PaymentOption {
  payment_method: "cash" | "card" | "loan";
  amount: Money;
}
