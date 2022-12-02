import React, { type FunctionComponent } from "react";
import { type InputProps, WithFieldInfo } from "~/field/components/Input";
import NumberInput from "../NumberInput";
import useBasicInputUncontrolledProps from "./useBasicNumberInputUncontrolledProps";

export interface BasicNumberInputUncontrolledProps extends InputProps {
  formatForDisplay?: (value: number) => number;
  formatForValue?: (value: number) => number;
  prefix?: string;
  suffix?: string;
}

const BasicNumberInputUncontrolled: FunctionComponent<BasicNumberInputUncontrolledProps> =
  function ({
    onChange: initialOnChange = () => {},
    name,
    value,
    children,
    formatForValue = (value) => value,
    formatForDisplay = (value) => value,
    prefix = "",
    suffix = "",
    ...props
  }) {
    const { currentValue, focused, setFocused, displayValue, onChange } =
      useBasicInputUncontrolledProps({
        name,
        prefix,
        suffix,
        formatForValue,
        formatForDisplay,
        initialOnChange,
      });

    return (
      <>
        {!focused && (
          <WithFieldInfo
            readOnly
            {...props}
            type="string"
            defaultValue={displayValue}
            onFocus={() => {
              setFocused(true);
            }}
          />
        )}
        {focused && (
          <NumberInput
            {...props}
            autoFocus
            type="number"
            name={name}
            valueOverride={currentValue ? formatForDisplay(currentValue) : ""}
            onChange={onChange}
            onBlur={() => {
              if (props.onBlur) {
                props.onBlur();
              }
              setFocused(false);
            }}
          />
        )}
      </>
    );
  };

export default BasicNumberInputUncontrolled;
