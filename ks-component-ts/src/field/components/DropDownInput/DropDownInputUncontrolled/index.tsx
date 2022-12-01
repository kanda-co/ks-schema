import React, { type FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import useDropDownInputUncontrolledProps from "~/field/components/DropDownInput/DropDownInputUncontrolled/useDropDownInputUncontrolledProps";
import { Button } from "@kanda-libs/ks-design-library";
import type { DropDownInputUncontrolledProps } from "../types";
import { DefaultFormFieldProps } from "~/field/types";

const DropDownInput: FunctionComponent<
  DefaultFormFieldProps<DropDownInputUncontrolledProps>
> = function ({
  name,
  options: initialOptions = [],
  placeholder,
  defaultValue,
  forwardRef,
  error,
  isLoading,
  className,
  ...restProps
}) {
  const {
    options = [],
    currentValue,
    classNames,
    selectedLabel,
  } = useDropDownInputUncontrolledProps({
    options: initialOptions,
    placeholder,
    isLoading,
    error,
    className,
    name,
  });
  return (
    <>
      {isLoading ? (
        <div className={classNames.select}>
          <div className={classNames.skeleton}>
            <Skeleton />
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden">
          <select
            className={classNames.select}
            defaultValue={defaultValue}
            value={currentValue}
            required
            ref={forwardRef}
            {...restProps}
          >
            {options.map(({ value, name }) => (
              <option
                key={value}
                disabled={value === defaultValue}
                value={value}
              >
                {name}
              </option>
            ))}
          </select>
            <Button.Link
              isLoading={isLoading}
              className="pointer-events-none"
              variant="grey"
              size={12}
              icon="chevron-down"
              label={selectedLabel}
              forwardRef={forwardRef}
            />
        </div>
      )}
    </>
  );
};

export default DropDownInput;
