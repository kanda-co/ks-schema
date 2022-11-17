import React, { type FunctionComponent } from "react";
import { StrengthMeter, Text } from "@kanda-libs/ks-design-library";

import type { PasswordStrengthIndicatorProps } from "./types";
import usePasswordStrengthIndicator from "~/components/PasswordStrengthIndicator/usePasswordStrengthIndicator";

const PasswordStrengthIndicator: FunctionComponent<PasswordStrengthIndicatorProps> =
  function ({ description, ...props }) {
    const { classNames, score, label, isLoading } =
      usePasswordStrengthIndicator(props);

    return (
      <div className={classNames.container}>
        <div className={classNames.info}>
          <StrengthMeter score={score} isLoading={isLoading} />
          <Text
            className={classNames.label}
            isLoading={isLoading}
            text={label}
          />
        </div>
        <Text
          className={classNames.description}
          isLoading={isLoading}
          text={description as string}
        />
      </div>
    );
  };

export default PasswordStrengthIndicator;
