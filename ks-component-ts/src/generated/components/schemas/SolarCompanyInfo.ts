import * as t from "io-ts";

export const SolarCompanyInfo = t.intersection([
  t.type({
    epvs_registration_number: t.string,
    solar_trade_association: t.union([
      t.literal("msc"),
      t.literal("heis"),
      t.literal("recc"),
    ]),
    solar_trade_association_number: t.string,
    electrical_trade_association: t.union([
      t.literal("niceic"),
      t.literal("napit"),
      t.literal("none"),
    ]),
  }),
  t.partial({
    electrical_trade_association_number: t.string,
  }),
]);

export interface SolarCompanyInfo {
  epvs_registration_number: string;
  solar_trade_association: "msc" | "heis" | "recc";
  solar_trade_association_number: string;
  electrical_trade_association: "niceic" | "napit" | "none";
  electrical_trade_association_number?: string;
}
