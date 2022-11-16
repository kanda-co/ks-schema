import React, { type FunctionComponent } from "react";
import { FieldInfoWrapperProps } from "~/field/types";
import useFormTheme from "~/hooks/useFormTheme";
import DefaultFieldInfo from "~/field/components/DefaultFieldInfo";

const FieldWrapper: FunctionComponent<FieldInfoWrapperProps> = function (
  props
) {
  const { fieldWrapper } = useFormTheme();
  const { children } = props;

  if (fieldWrapper === "Simple") {
    return <>{children}</>;
  }

  return <DefaultFieldInfo {...props} />;
};

export default FieldWrapper;
