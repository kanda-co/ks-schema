import React, { ChangeEvent, useEffect, type FunctionComponent } from "react";
import { type InputProps } from "~/field/components/Input";
import { stripUnneededProps } from "~/field/helpers";
import type { StringIndexedObject } from "~/types";
import useBasicInputUncontrolledProps from "./useBasicNumberInputUncontrolledProps";
import { getInputTag } from "./helpers";
import { DISALLOWED_KEYS } from "./constants";
import { useFormContext } from "react-hook-form";

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
    const { register } = useFormContext();

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

    // DEV_NOTE: removed register here as need to register name and
    // validationConditions, but register had wrong type?
    const {
      register: propsRegitser,
      validationConditions,
      ...focusedProps
    } = props;

    const InputTag = getInputTag(autoSize);

    useEffect(() => {
      if (!register || !validationConditions) return;
      register(name as string, validationConditions);
    }, [register, validationConditions]);

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
            onKeyDown={(e) => {
              if (DISALLOWED_KEYS.includes(e.keyCode)) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            onChange={onChange as (...args: any[]) => void}
            onBlur={(e) => {
              if (props.onBlur) {
                props.onBlur(e);
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
