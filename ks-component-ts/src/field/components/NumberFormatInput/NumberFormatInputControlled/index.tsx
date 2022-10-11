import React, { type FunctionComponent } from "react";
import NumberFormat from "react-number-format";
import { Controller } from "react-hook-form";
import { Uncontrolled as InputUncontrolled } from "~/field/components/Input";
import { type NumberFormatInputControlledProps } from "../types";
import { defaultOnValueChange } from "./helpers";

const NumberFormatInputControlled: FunctionComponent<NumberFormatInputControlledProps> =
  function ({
    name,
    control,
    controlProps,
    isLoading,
    isNumericString = false,
    rules = {},
    formatValue: valueFormatter = (value: string) => value,
    onValueChange,
    ...restProps
  }) {
    return (
      <Controller
        name={name as string}
        control={control}
        rules={rules}
        {...controlProps}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <NumberFormat
            customInput={InputUncontrolled}
            getInputRef={ref}
            name={name}
            value={valueFormatter(value)}
            onValueChange={(formatValue) => {
              if (onValueChange) {
                onValueChange(formatValue, onChange);
              } else {
                defaultOnValueChange(formatValue, isNumericString, onChange);
              }
            }}
            onBlur={onBlur}
            isLoading={isLoading}
            isNumericString={isNumericString}
            {...restProps}
          />
        )}
      />
    );
  };

export default NumberFormatInputControlled;
