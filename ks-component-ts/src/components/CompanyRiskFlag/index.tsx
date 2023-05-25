import React, { type FunctionComponent } from "react";
import { Icon } from "@kanda-libs/ks-design-library";
import type { Monitor } from "generated/components/schemas";
import type { StringIndexedObject } from "~/types";
import { COMPANY_RISK_FLAG_STROKES } from "./constants";
import useCompanyRiskFlag from "./useCompanyRiskFlag";

export interface CompanyRiskFlagProps {
  id?: string;
  monitors?: StringIndexedObject<Monitor>;
  className?: string;
}

const CompanyRiskFlag: FunctionComponent<CompanyRiskFlagProps> = function ({
  id,
  monitors = {},
  className = "",
}) {
  const { level } = useCompanyRiskFlag(id, monitors);

  return (
    <Icon
      icon="flag"
      size={18}
      stroke={COMPANY_RISK_FLAG_STROKES[level as string]}
      className={className}
    />
  );
};

export default CompanyRiskFlag;
