import React, { FunctionComponent } from "react";
import { Icon, SkeletonLoader } from "@kanda-libs/ks-design-library";
import AutosizeInput from "react-input-autosize";
import { DefaultFormFieldProps } from "~/field/types";
import useInputProps from "./useInputProps";

export interface InputUncontrolledProps {
  icon?: string;
  iconColor?: string;
  iconVariant?: string;
  italic?: string;
  placeholder?: string;
  autoSize?: boolean;
}

const InputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<InputUncontrolledProps>
> = function ({
  forwardRef,
  error,
  isLoading,
  icon,
  iconColor,
  iconVariant,
  italic,
  autoSize = false,
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
      }
    : {
        className: classNames.input,
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
            <InputTag ref={forwardRef} {...inputProps} {...restProps} />
          </>
        }
      />
    </div>
  );
};

export default InputUncontrolled;
