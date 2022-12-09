import React, { ChangeEvent, type FunctionComponent } from "react";
import { type InputProps } from "~/field/components/Input";
import { stripUnneededProps } from "~/field/helpers";
import AutoSizeNumberInput, {
  WithFieldInfo as AutoSizeWithFieldInfo,
} from "../AutoSizeNumberInput";
import NumberInput, { WithFieldInfo } from "../NumberInput";
import useBasicInputUncontrolledProps from "./useBasicNumberInputUncontrolledProps";

export interface BasicNumberInputUncontrolledProps
  extends Omit<InputProps, "onChange"> {
  formatForDisplay?: (value: number) => number;
  formatForValue?: (value: number) => number;
  prefix?: string;
  suffix?: string;
  autoSize?: boolean;
  fixedDecimalScale?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
      });

    const focusedValue = currentValue ? formatForDisplay(currentValue) : "";
    const formattedProps = stripUnneededProps(props);

    const ReadOnlyInputTag = autoSize ? AutoSizeWithFieldInfo : WithFieldInfo;
    const FocusedInputTag = autoSize ? AutoSizeNumberInput : NumberInput;

    return (
      <>
        {!focused && (
          <div className="min-w-8">
            <ReadOnlyInputTag
              readOnly
              {...formattedProps}
              type="string"
              defaultValue={displayValue}
              onFocus={() => {
                setFocused(true);
              }}
              placeholder={placeholder as string}
            />
          </div>
        )}
        {focused && (
          <FocusedInputTag
            {...stripUnneededProps(props)}
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
