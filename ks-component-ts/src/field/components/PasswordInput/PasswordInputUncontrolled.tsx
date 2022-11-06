import React, { FunctionComponent } from "react";
import { Icon } from "@kanda-libs/ks-design-library";
import Skeleton from "react-loading-skeleton";
import usePasswordInput from "./usePasswordInput";
import { DefaultFormFieldProps } from "~/field/types";
import { ICON_SIZE, SKELETONS } from "./constants";

export interface PasswordInputProps {
  placeholder?: string;
}

const PasswordInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<PasswordInputProps>
> = function ({ forwardRef, isLoading, error, ...restProps }) {
  const {
    className,
    skeletonClasses,
    buttonClassName,
    type,
    showPassword,
    toggleShowPassword,
  } = usePasswordInput(error as string);

  return (
    <>
      {isLoading ? (
        <>
          <button type="button" className={buttonClassName}>
            <Skeleton
              width={SKELETONS.icon.width}
              height={SKELETONS.icon.height}
            />
          </button>
          <div className={className}>
            <div className={skeletonClasses}>
              <Skeleton />
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            tabIndex={-1}
            type="button"
            className={buttonClassName}
            onClick={toggleShowPassword}
          >
            <Icon icon={showPassword ? "eye-off" : "eye"} size={ICON_SIZE} />
          </button>
          <input
            className={className}
            ref={forwardRef}
            {...restProps}
            type={type}
          />
        </>
      )}
    </>
  );
};

export default PasswordInputUncontrolled;
