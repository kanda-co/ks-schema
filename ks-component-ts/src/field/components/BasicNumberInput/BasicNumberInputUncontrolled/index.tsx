import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { type InputProps, WithFieldInfo } from "~/field/components/Input";
import NumberInput from "../NumberInput";
import { formatValue } from "./helpers";

export interface BasicNumberInputUncontrolledProps extends InputProps {
  formatForDisplay?: (value: number) => number;
  formatForValue?: (value: number) => number;
}

const BasicNumberInputUncontrolled: FunctionComponent<BasicNumberInputUncontrolledProps> =
  function ({
    onChange: initialOnChange = () => {},
    name,
    value,
    children,
    formatForValue = (value) => value,
    formatForDisplay = (value) => value,
    ...props
  }) {
    const { setValue } = useFormContext();
    const [focused, setFocused] = useState(false);
    const [currentValue] = useWatch({
      name: [name as string],
    });

    const formattedValue = useMemo(
      () => formatValue(currentValue, formatForDisplay),
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
              currentValue
                ? formatForDisplay(currentValue).toString()
                : undefined
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
