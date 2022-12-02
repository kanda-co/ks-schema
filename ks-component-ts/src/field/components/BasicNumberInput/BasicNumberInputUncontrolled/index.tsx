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

export type BasicNumberInputUncontrolledProps = InputProps;

const BasicNumberInputUncontrolled: FunctionComponent<BasicNumberInputUncontrolledProps> =
  function ({ onChange: initialOnChange, name, value, children, ...props }) {
    const { setValue } = useFormContext();
    const [focused, setFocused] = useState(false);
    const [currentValue] = useWatch({
      name: [name as string],
    });

    const formattedValue = useMemo(
      () => formatValue(currentValue),
      [currentValue]
    );

    const onChange = useCallback(
      (e) => {
        if (initialOnChange) initialOnChange(e);
        return parseFloat(e.target.value);
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
            value={value}
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
