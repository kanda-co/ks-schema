import React, { type FunctionComponent } from "react";
import NumberFormat from "react-number-format";
import { Controller } from "react-hook-form";
import { type NumberFormatInputControlledProps } from "../types";
import { defaultOnValueChange } from "./helpers";
import { getValidationConditions } from "~/field/components/Validator/useValidationProps/helpers";
import NumberInputUncontrolled from "~/field/components/Input/NumberInputUncontrolled";

const NumberFormatInputControlled: FunctionComponent<NumberFormatInputControlledProps> =
  function ({
    name,
    control,
    controlProps,
    isLoading = false,
    isNumericString = false,
    rules = {},
    validation,
    placeholder,
    formatValue: valueFormatter = (value: string) => value,
    customInput = NumberInputUncontrolled,
    onValueChange,
    ...restProps
  }) {
    return (
      <Controller
        name={name as string}
        control={control}
        rules={validation ? getValidationConditions(validation) : rules}
        {...controlProps}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <NumberFormat
            getInputRef={ref}
            customInput={customInput}
            name={name}
            value={restProps.mask ? value : valueFormatter(value)}
            onValueChange={(formatValue) => {
              if (onValueChange) {
                onValueChange(formatValue, onChange);
              } else {
                defaultOnValueChange(formatValue, isNumericString, onChange);
              }
            }}
            onBlur={onBlur}
            isNumericString={isNumericString}
            placeholder={placeholder as string}
            {...restProps}
          />
        )}
      />
    );
  };

export default NumberFormatInputControlled;
