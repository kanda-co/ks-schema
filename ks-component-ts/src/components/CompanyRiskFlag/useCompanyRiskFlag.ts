import type { Flag, Monitor } from "@kanda-libs/ks-frontend-services";
import type { StringIndexedObject } from "~/types";

export interface CompanyRiskFlagHook {
  level?: Flag["level"];
}

export default function useCompanyRiskFlag(
  id: string = "",
  monitors: StringIndexedObject<Monitor>
): CompanyRiskFlagHook {
  const monitor = monitors[id];

  return {
    level: monitor?.flag?.level || "green",
  };
}
