import React, { FunctionComponent } from "react";
import { Controller } from "react-hook-form";
import AutoSizeInputUncontrolled, {
  type AutoSizeInputUncontrolledProps,
} from "./AutoSizeInputUncontrolled";

export interface AutoSizeInputProps extends AutoSizeInputUncontrolledProps {}

const AutoSizeInput: FunctionComponent<AutoSizeInputProps> = function ({
  name,
  control,
  controlProps,
  rules,
  isLoading,
  register,
  ...restProps
}) {
  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      {...controlProps}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <AutoSizeInputUncontrolled
          name={name}
          value={value}
          inputRef={ref}
          onChange={onChange}
          onBlur={onBlur}
          isLoading={isLoading}
          {...restProps}
        />
      )}
    />
  );
};

export default AutoSizeInput;
