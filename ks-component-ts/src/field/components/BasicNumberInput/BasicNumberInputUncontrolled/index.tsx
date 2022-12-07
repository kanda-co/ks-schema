import React, { type FunctionComponent } from "react";
import { type InputProps } from "~/field/components/Input";
import { stripUnneededProps } from "~/field/helpers";
import NumberInput, { WithFieldInfo } from "../AutoSizeNumberInput";
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
    placeholder,
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

    const focusedValue = currentValue ? formatForDisplay(currentValue) : "";
    const formattedProps = stripUnneededProps(props);

    return (
      <>
        {!focused && (
          <WithFieldInfo
            readOnly
            {...formattedProps}
            type="string"
            defaultValue={displayValue}
            onFocus={() => {
              setFocused(true);
            }}
          />
        )}
        {focused && (
          <NumberInput
            {...stripUnneededProps(props)}
            autoFocus
            type="number"
            name={name}
            value={focusedValue}
            valueOverride={focusedValue}
            onChange={onChange}
            onBlur={() => {
              if (props.onBlur) {
                props.onBlur();
              }
              setFocused(false);
            }}
            placeholder={placeholder as string}
          />
        )}
      </>
    );
  };

export default BasicNumberInputUncontrolled;
