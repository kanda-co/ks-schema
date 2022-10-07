import React, { FunctionComponent } from "react";
import useErrorClassName from "~/field/components/Error/useErrorClassName";

export interface ErrorProps {
  error: string;
}

const Error: FunctionComponent<ErrorProps> = function ({ error }) {
  const className = useErrorClassName();

  if (!className) {
    return <></>;
  }

  return <span className={className}>{error}</span>;
};

export default Error;
