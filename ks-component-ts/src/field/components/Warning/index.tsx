import React, { type FunctionComponent } from "react";
import useWarningClassName from "~/field/components/Warning/useWarningClassName";

export interface WarningProps {
  warning: string | JSX.Element | JSX.Element[] | null;
}

const Warning: FunctionComponent<WarningProps> = function ({ warning }) {
  const className = useWarningClassName();

  if (!className) {
    return <></>;
  }

  return <span className={className}>{warning}</span>;
};

export default Warning;
