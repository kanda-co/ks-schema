import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";
import { Address } from "./Address";
import { Money } from "./Money";

export const CustomerDetails = t.intersection([
  t.type({
    email: t.string,
    gender: t.union([t.literal("male"), t.literal("female")]),
    title: t.union([
      t.literal("mrs"),
      t.literal("mr"),
      t.literal("miss"),
      t.literal("ms"),
      t.literal("dr"),
    ]),
    first_name: t.string,
    last_name: t.string,
    date_of_birth: DateFromISOString,
    marital_status: t.union([
      t.literal("widowed"),
      t.literal("other"),
      t.literal("married"),
      t.literal("divorced"),
      t.literal("cohabiting"),
      t.literal("to_be_married"),
      t.literal("separated"),
      t.literal("single"),
    ]),
    number_of_dependants: t.number,
    residential_status: t.union([
      t.literal("tenant"),
      t.literal("council tenant"),
      t.literal("living with parents"),
      t.literal("owner"),
      t.literal("owner without mortgage"),
      t.literal("lodger"),
      t.literal("armed forces"),
    ]),
    current_address: Address,
  }),
  t.partial({
    middle_name: t.string,
    maiden_name: t.string,
    telephone: t.string,
    mobile: t.string,
    monthly_rent_amount: Money,
    previous_address_one: Address,
    previous_address_two: Address,
    goods_delivery_address: Address,
  }),
]);

export interface CustomerDetails {
  email: string;
  gender: "male" | "female";
  title: "mrs" | "mr" | "miss" | "ms" | "dr";
  first_name: string;
  middle_name?: string;
  last_name: string;
  maiden_name?: string;
  telephone?: string;
  mobile?: string;
  date_of_birth: Date;
  marital_status:
    | "widowed"
    | "other"
    | "married"
    | "divorced"
    | "cohabiting"
    | "to_be_married"
    | "separated"
    | "single";
  number_of_dependants: number;
  residential_status:
    | "tenant"
    | "council tenant"
    | "living with parents"
    | "owner"
    | "owner without mortgage"
    | "lodger"
    | "armed forces";
  monthly_rent_amount?: Money;
  current_address: Address;
  previous_address_one?: Address;
  previous_address_two?: Address;
  goods_delivery_address?: Address;
}
