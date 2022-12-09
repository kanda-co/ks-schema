import React, { ChangeEvent, type FunctionComponent } from "react";
import { type InputProps } from "~/field/components/Input";
import { stripUnneededProps } from "~/field/helpers";
import type { StringIndexedObject } from "~/types";
import NumberInput from "~/field/components/Input/InputUncontrolled";
import AutoSizeInputUncontrolled from "~/field/components/AutoSizeInput/AutoSizeInputUncontrolled";
import useBasicInputUncontrolledProps from "./useBasicNumberInputUncontrolledProps";
import InputUncontrolled from "~/field/components/Input/InputUncontrolled";

export interface BasicNumberInputUncontrolledProps
  extends Omit<InputProps, "onChange"> {
  formatForDisplay?: (value: number) => number;
  formatForValue?: (value: number) => number;
  prefix?: string;
  suffix?: string;
  autoSize?: boolean;
  fixedDecimalScale?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isAllowed?: (values: StringIndexedObject) => boolean;
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
    placeholder = "0.00",
    autoSize = false,
    fixedDecimalScale = true,
    isAllowed,
    ...props
  }) {
    const decimalScale = fixedDecimalScale ? 2 : 0;
    const { currentValue, focused, setFocused, displayValue, onChange } =
      useBasicInputUncontrolledProps({
        name,
        prefix,
        suffix,
        formatForValue,
        formatForDisplay,
        initialOnChange,
        decimalScale,
        isAllowed,
      });

    const focusedValue = currentValue ? formatForDisplay(currentValue) : "";
    const formattedProps = stripUnneededProps(props);

    const ReadOnlyInputTag = autoSize
      ? AutoSizeInputUncontrolled
      : InputUncontrolled;
    const FocusedInputTag = autoSize ? AutoSizeInputUncontrolled : NumberInput;

    return (
      <>
        {!focused && (
          <ReadOnlyInputTag
            {...formattedProps}
            readOnly
            name={name}
            value={currentValue}
            valueOverride={displayValue}
            onFocus={() => {
              setFocused(true);
            }}
            placeholder={placeholder as string}
          />
        )}
        {focused && (
          <FocusedInputTag
            {...formattedProps}
            autoFocus
            type="number"
            name={name}
            value={focusedValue}
            valueOverride={focusedValue}
            onChange={onChange as (...args: any[]) => void}
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
