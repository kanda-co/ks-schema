import React, { FunctionComponent } from "react";
import { Controller } from "react-hook-form";
import { FingerprintBooleanInputProps } from "./types";
import { FieldFormControllerChildrenArgs } from "~/field/components/FieldFormController/types";
import { DefaultFormFieldProps } from "~/field/types";
import FingerprintBooleanInputUncontrolled from "~/field/components/FingerprintBooleanInput/FingerprintBooleanInputUncontrolled";

export interface Props {}

const FingerprintBooleanInputControlled: FunctionComponent<
  FieldFormControllerChildrenArgs<
    DefaultFormFieldProps<FingerprintBooleanInputProps>
  >
> = function ({
  name,
  control,
  rules,
  controlProps,
  handle,
  isLoading,
  ...restProps
}) {
  return (
    <Controller
      control={control}
      rules={rules}
      {...controlProps}
      name={name as string}
      render={({ field: { onChange, onBlur, value } }) => (
        <FingerprintBooleanInputUncontrolled
          handle={handle}
          name={name}
          defaultChecked={value}
          onBlur={onBlur}
          isLoading={isLoading}
          {...restProps}
          onChange={() => {
            onChange(!value);
          }}
        />
      )}
    />
  );
};

export default FingerprintBooleanInputControlled;
