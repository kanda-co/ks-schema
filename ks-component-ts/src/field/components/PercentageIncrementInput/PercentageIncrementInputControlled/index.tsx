import { Button } from "@kanda-libs/ks-design-library";
import React, { type FunctionComponent } from "react";
import { FormTheme } from "~/components";
import { DefaultFormFieldProps } from "~/field/types";
import BasicNumberInput, {
  type BasicNumberInputProps,
} from "../../BasicNumberInput";
import usePercentageIncrement from "./usePercentageIncrement";

export interface PercentageIncrementInputControlledProps {
  placeholder?: string;
}

const PercentageIncrementInputControlled: FunctionComponent<
  DefaultFormFieldProps<
    BasicNumberInputProps & PercentageIncrementInputControlledProps
  >
> = function ({
  fixedDecimalScale = false,
  name,
  isAllowed: inputIsAllowed,
  onBlur: inputOnBlur,
  ...props
}) {
  const { onIncrement, onDecrement, disabled, onBlur } = usePercentageIncrement(
    {
      name,
      inputIsAllowed,
      inputOnBlur,
    }
  );

  return (
    <div className="flex flex-row relative">
      <FormTheme variant="percentage-increment">
        <div className="w-9 h-9 absolute left-0 border-r border-neutral-300 mt-px ml-px rounded-l-lg flex">
          <Button.Icon
            icon="minus"
            id={`${name}-minus`}
            onClick={onDecrement}
            className="m-auto disabled:opacity-25"
            size="28-16"
            disabled={disabled.decrement}
          />
        </div>
        <BasicNumberInput
          name={name}
          suffix="%"
          fixedDecimalScale={false}
          onBlur={onBlur}
          {...props}
        />
        <div className="w-9 h-9 absolute right-0 border-l border-neutral-300 mt-px mr-px rounded-r-lg flex">
          <Button.Icon
            icon="plus"
            id={`${name}-plus`}
            onClick={onIncrement}
            className="m-auto disabled:opacity-25"
            size="28-16"
            disabled={disabled.increment}
          />
        </div>
      </FormTheme>
    </div>
  );
};

export default PercentageIncrementInputControlled;
