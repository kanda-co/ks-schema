import React, { ForwardedRef, FunctionComponent } from "react";
import { SelectUncontrolledProps } from "../types";
import useSelectUncontrolled from "./useSelectUncontrolled";
import Skeleton from "react-loading-skeleton";
import { DefaultFormFieldProps } from "~/field/types";

const SelectUncontrolled: FunctionComponent<
  DefaultFormFieldProps<SelectUncontrolledProps>
> = function ({
  forwardRef,
  options: initialOptions,
  placeholder,
  error,
  isLoading,
  className,
  name,
  disableDefaultValue = true,
  ...restProps
}) {
  const { options, classNames, currentValue, defaultValue, skeletonClasses } =
    useSelectUncontrolled(
      name as string,
      placeholder as string,
      initialOptions,
      isLoading,
      error,
      className
    );

  return (
    <>
      {isLoading ? (
        <div className={classNames.select}>
          <div className={classNames.skeleton}>
            <Skeleton className={skeletonClasses} />
          </div>
        </div>
      ) : (
        <select
          required
          name={name}
          className={classNames.select}
          value={currentValue || defaultValue}
          ref={forwardRef as ForwardedRef<HTMLSelectElement>}
          {...restProps}
        >
          {options.map(({ value, name: optionName }) => (
            <option
              key={value}
              disabled={disableDefaultValue && value === defaultValue}
              value={value}
            >
              {optionName}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default SelectUncontrolled;
