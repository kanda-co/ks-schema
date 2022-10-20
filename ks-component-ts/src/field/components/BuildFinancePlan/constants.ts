import { RadioSelectVariant } from "~/field/components/RadioSelect/types";

export const BASE_RATES = {
  FREE: ["10", "12", "24", "36"],
  490: ["12", "24", "36", "48", "60"],
  790: ["12", "24", "36", "48", "60"],
  990: ["12", "24", "36", "48", "60"],
  1190: ["12", "24", "36", "48", "60"],
};

export const BASE_APRS = [
  { name: "0%", value: "0" },
  { name: "4.9%", value: "4.9" },
  { name: "7.9%", value: "7.9" },
  { name: "9.9%", value: "9.9" },
  { name: "11.9%", value: "11.9" },
];

export const BASE_TERMS = [
  { name: "1 yr", value: "12" },
  { name: "2 yrs", value: "24" },
  { name: "3 yrs", value: "36" },
  { name: "4 yrs", value: "48" },
  { name: "5 yrs", value: "60" },
];

export const DEFAULT_APRS = ["FREE", "490", "790", "990", "1190"];

export const DEFAULT_TERMS = ["12", "24", "36", "48", "60"];

export const VARIANT = "narrow";

export const DEPOSIT_PROPS = {
  label: "Select a deposit",
  inline: true,
  variant: VARIANT as RadioSelectVariant,
  options: [
    { name: "10%", value: "10" },
    { name: "20%", value: "20" },
    { name: "30%", value: "30" },
    { name: "40%", value: "40" },
    { name: "50%", value: "50" },
  ],
};

export const SET_DEPOSIT_PROPS = {
  label: "Deposit taken by tradesperson",
  inline: true,
  variant: VARIANT as RadioSelectVariant,
};

export const RATE_PROPS = {
  label: "Interest rate",
  inline: true,
  variant: VARIANT as RadioSelectVariant,
};

export const TERM_PROPS = {
  label: "Term length",
  inline: true,
  variant: VARIANT as RadioSelectVariant,
};

export const CLASS_NAMES = {
  container: "flex flex-col w-full",
  depositRow: "flex flex-row",
  depositFlex: "flex flex-1",
  price: "flex justify-end md:min-w-20 mt-7 pt-0.5 md:pt-1 pl-2 md:pl-4",
};

export const SELECT_PRICE_PROPS = {
  color: "green-500",
  poundsClassName: "text-style-f-em",
  centsClassName: "text-style-k-em mb-auto mt-px",
};

export const SET_PRICE_PROPS = {
  color: "neutral-600",
  poundsClassName: "text-20-24-em",
  centsClassName: "text-10-14-em mb-auto mt-px",
  wrapperClassName: "mb-6",
};
