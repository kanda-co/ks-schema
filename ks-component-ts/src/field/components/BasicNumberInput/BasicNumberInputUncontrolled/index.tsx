import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { type InputProps, WithFieldInfo } from "~/field/components/Input";
import NumberInput from "../NumberInput";
import { renderDisplayValue } from "./helpers";

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
    const { setValue } = useFormContext();
    const [focused, setFocused] = useState(false);
    const [currentValue] = useWatch({
      name: [name as string],
    });

    const getDisplayValue = useCallback(
      (nextValue: string) =>
        renderDisplayValue({
          value: nextValue,
          prefix,
          suffix,
          formatForDisplay,
        }),
      [formatForDisplay]
    );

    const formattedValue = useMemo(
      () => getDisplayValue(currentValue),
      [currentValue]
    );

    const onChange = useCallback(
      (e) => {
        initialOnChange(e);
        setValue(name as string, formatForValue(parseFloat(e.target.value)));
      },
      [currentValue]
    );

    return (
      <>
        {!focused && (
          <WithFieldInfo
            {...props}
            type="string"
            value={formattedValue}
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
            valueOverride={
              currentValue ? formatForDisplay(currentValue) : undefined
            }
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
