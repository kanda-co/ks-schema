import type { StringIndexedObject } from "~/types";

// Without explicitly mentioning this class, it won't appear in the tailwind
// config build as COMPANY_RISK_FLAG_STROKES passes to Icon which uses string concatenation
export const COMPANY_RISK_YELLOW = "text-yellow";

export const COMPANY_RISK_FLAG_STROKES: StringIndexedObject<string> = {
  red: "red-200",
  yellow: "yellow",
  green: "green-500",
};
