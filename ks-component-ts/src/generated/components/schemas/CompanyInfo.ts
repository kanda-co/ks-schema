import * as t from "io-ts";
import { ContractAgreement } from "./ContractAgreement";
import { Document } from "./Document";
import { Pence } from "./Pence";

export const CompanyInfo = t.intersection([
  t.type({
    trade_type: t.union([
      t.literal("air_conditioning"),
      t.literal("bathrooms"),
      t.literal("battery_storage"),
      t.literal("blinds_and_shutters"),
      t.literal("carpentry"),
      t.literal("cctv_and_security_installations"),
      t.literal("conservatories"),
      t.literal("decking"),
      t.literal("driveways_and_patios"),
      t.literal("electrician"),
      t.literal("ev_charger_installer"),
      t.literal("fencing"),
      t.literal("fireplaces"),
      t.literal("fitted_bedroom_furniture"),
      t.literal("floor_layer"),
      t.literal("garage_doors"),
      t.literal("garden_rooms"),
      t.literal("gas_engineer"),
      t.literal("gates"),
      t.literal("heat_pumps"),
      t.literal("heating_systems"),
      t.literal("kitchen_fitter"),
      t.literal("landscaping"),
      t.literal("plumbing"),
      t.literal("resin_driveways"),
      t.literal("roofing__excluding_flat_roofs"),
      t.literal("security_systems"),
      t.literal("tiler"),
      t.literal("verandas"),
      t.literal("windows_and_doors"),
      t.literal("multi_trade"),
      t.literal("other_trade"),
    ]),
    trade_type_name: t.string,
    trade_body: t.union([
      t.literal("none"),
      t.literal("acrib"),
      t.literal("aphc"),
      t.literal("assure"),
      t.literal("certass"),
      t.literal("elecsa"),
      t.literal("fensa"),
      t.literal("feta"),
      t.literal("gas_safe"),
      t.literal("hetas"),
      t.literal("napit"),
      t.literal("nfrc"),
      t.literal("niceic"),
      t.literal("other"),
    ]),
    trade_body_name: t.string,
    warranty_length: t.number,
    average_monthly_jobs: t.number,
    average_job_value: Pence,
    use_subcontractor: t.union([t.literal("yes"), t.literal("no")]),
  }),
  t.partial({
    trade_body_number: t.string,
    insurance_document: Document,
    contract_agreement: ContractAgreement,
  }),
]);

export interface CompanyInfo {
  trade_type:
    | "air_conditioning"
    | "bathrooms"
    | "battery_storage"
    | "blinds_and_shutters"
    | "carpentry"
    | "cctv_and_security_installations"
    | "conservatories"
    | "decking"
    | "driveways_and_patios"
    | "electrician"
    | "ev_charger_installer"
    | "fencing"
    | "fireplaces"
    | "fitted_bedroom_furniture"
    | "floor_layer"
    | "garage_doors"
    | "garden_rooms"
    | "gas_engineer"
    | "gates"
    | "heat_pumps"
    | "heating_systems"
    | "kitchen_fitter"
    | "landscaping"
    | "plumbing"
    | "resin_driveways"
    | "roofing__excluding_flat_roofs"
    | "security_systems"
    | "tiler"
    | "verandas"
    | "windows_and_doors"
    | "multi_trade"
    | "other_trade";
  trade_type_name: string;
  trade_body:
    | "none"
    | "acrib"
    | "aphc"
    | "assure"
    | "certass"
    | "elecsa"
    | "fensa"
    | "feta"
    | "gas_safe"
    | "hetas"
    | "napit"
    | "nfrc"
    | "niceic"
    | "other";
  trade_body_name: string;
  trade_body_number?: string;
  warranty_length: number;
  average_monthly_jobs: number;
  average_job_value: Pence;
  use_subcontractor: "yes" | "no";
  insurance_document?: Document;
  contract_agreement?: ContractAgreement;
}
