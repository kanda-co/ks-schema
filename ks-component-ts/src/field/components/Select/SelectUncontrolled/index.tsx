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
  ...restProps
}) {
  const { options, classNames, currentValue, defaultValue, skeletonClasses } =
    useSelectUncontrolled(
      name,
      placeholder,
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
          name={name}
          className={classNames.select}
          defaultValue={defaultValue}
          required
          value={currentValue}
          ref={forwardRef as ForwardedRef<HTMLSelectElement>}
          {...restProps}
        >
          {options.map(({ value, name: optionName }) => (
            <option key={value} disabled={value === defaultValue} value={value}>
              {optionName}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default SelectUncontrolled;