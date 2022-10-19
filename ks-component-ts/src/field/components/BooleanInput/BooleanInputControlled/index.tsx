import React, { FunctionComponent } from "react";
import { Controller } from "react-hook-form";
import Uncontrolled, {
  type BooleanFieldProps,
} from "../BooleanInputUncontrolled";
import { type ExtendControllerProps } from "~/field/types";

export type BooleanInputControlledProps = BooleanFieldProps &
  ExtendControllerProps;

const BooleanInputControlled: FunctionComponent<BooleanInputControlledProps> =
  function ({
    name,
    control,
    rules,
    controlProps = {},
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
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Uncontrolled
            handle={handle}
            name={name}
            defaultChecked={value}
            forwardRef={ref}
            onChange={() => {
              onChange(!value);
            }}
            onBlur={onBlur}
            isLoading={isLoading}
            {...restProps}
          />
        )}
      ></Controller>
    );
  };

export default BooleanInputControlled;
