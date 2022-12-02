import React, { type FunctionComponent, InputHTMLAttributes } from "react";
import { Icon, SkeletonLoader } from "@kanda-libs/ks-design-library";
import AutosizeInput from "react-input-autosize";
import { DefaultFormFieldProps } from "~/field/types";
import useInputProps from "./useInputProps";
import { stripUnneededProps } from "~/field/helpers";

export interface InputUncontrolledProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  icon?: string;
  iconColor?: string;
  iconVariant?: string;
  italic?: string;
  placeholder?: string | JSX.Element;
  autoSize?: boolean;
  valueOverride?: string;
}

const InputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<InputUncontrolledProps>
> = function ({
  forwardRef,
  error,
  isLoading,
  icon,
  iconColor = "text-neutral-500",
  iconVariant = "default",
  italic,
  autoSize = false,
  valueOverride,
  ...restProps
}) {
  const { classNames, iconProps } = useInputProps(
    error,
    iconColor,
    iconVariant,
    italic
  );

  const InputTag = autoSize ? AutosizeInput : "input";
  const inputProps = autoSize
    ? {
        inputClassName: classNames.input,
        inputRef: forwardRef as
          | ((instance: HTMLInputElement | null) => void)
          | undefined,
      }
    : {
        className: classNames.input,
        ref: forwardRef,
      };

  return (
    <div className={classNames.container}>
      <SkeletonLoader
        wrapperClassName="flex w-full"
        containerClassName={classNames.skeleton}
        isLoading={isLoading}
        afterLoading={
          <>
            {icon && (
              <div className={classNames.iconContainer}>
                <Icon {...iconProps} icon={icon} />
              </div>
            )}
            <InputTag
              {...inputProps}
              {...stripUnneededProps(restProps)}
              value={valueOverride || restProps.value}
              placeholder={restProps.placeholder as string}
            />
          </>
        }
      />
    </div>
  );
};

export default InputUncontrolled;
