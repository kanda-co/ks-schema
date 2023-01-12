import React, { ChangeEvent, type FunctionComponent } from "react";
import { type InputProps } from "~/field/components/Input";
import { stripUnneededProps } from "~/field/helpers";
import type { StringIndexedObject } from "~/types";
import useBasicInputUncontrolledProps from "./useBasicNumberInputUncontrolledProps";
import { getInputTag } from "./helpers";

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
    const readOnlyProps = stripUnneededProps(props);
    const { register, ...focusedProps } = props;

    const InputTag = getInputTag(autoSize);

    return (
      <>
        {!focused && (
          <InputTag
            {...readOnlyProps}
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
          <InputTag
            {...focusedProps}
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
