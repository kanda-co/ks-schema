import { Button, SkeletonLoader } from "@kanda-libs/ks-design-library";
import React, { type FunctionComponent } from "react";
import { FormTheme } from "~/components";
import { DefaultFormFieldProps } from "~/field/types";
import BasicNumberInput, {
  type BasicNumberInputProps,
} from "../../BasicNumberInput";
import usePercentageIncrement from "./usePercentageIncrement";

export interface PercentageIncrementInputControlledProps {
  placeholder?: string;
  upperLimit?: number;
  lowerLimit?: number;
  appendComponent?: string | JSX.Element | JSX.Element[];
  onBlur?: (...event: any[]) => void;
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
  upperLimit = 50,
  lowerLimit = 10,
  isLoading,
  appendComponent,
  ...props
}) {
  const { onIncrement, onDecrement, disabled, onBlur } = usePercentageIncrement(
    {
      name,
      inputIsAllowed,
      inputOnBlur,
      upperLimit,
      lowerLimit,
    }
  );

  return (
    <>
      <div className="relative flex flex-row w-36 min-w-36 max-w-36">
        <SkeletonLoader
          width={144}
          height={34}
          isLoading={isLoading}
          afterLoading={
            <FormTheme variant="percentage-increment">
              <div className="absolute left-0 flex mt-px ml-px border-r rounded-l-lg w-9 h-9 border-neutral-300">
                <Button.Icon
                  icon="minus"
                  id={`${name}-minus`}
                  onClick={onDecrement}
                  className="m-auto disabled:opacity-25"
                  size="28-16"
                  disabled={disabled.decrement || isLoading}
                />
              </div>
              <BasicNumberInput
                name={name}
                suffix="%"
                fixedDecimalScale={false}
                onBlur={onBlur}
                formatForValue={(value: number) => Math.round(value)}
                {...props}
              />
              <div className="absolute right-0 flex mt-px mr-px border-l rounded-r-lg w-9 h-9 border-neutral-300">
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
          }
        />
      </div>
      {appendComponent ? appendComponent : <></>}
    </>
  );
};

export default PercentageIncrementInputControlled;
