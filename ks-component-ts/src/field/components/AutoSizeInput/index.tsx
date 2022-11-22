import React, { FunctionComponent } from "react";
import { Controller } from "react-hook-form";
import AutoSizeInputUncontrolled, {
  type AutoSizeInputUncontrolledProps,
} from "./AutoSizeInputUncontrolled";
import type { StringIndexedObject } from "~/types";

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
          isLoading={isLoading}
          {...(restProps as StringIndexedObject)}
          onBlur={onBlur as unknown as () => void}
          onChange={onChange as unknown as () => void}
        />
      )}
    />
  );
};

export default AutoSizeInput;
