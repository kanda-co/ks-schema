import React, { type FunctionComponent } from "react";
import AutosizeInput, { type AutosizeInputProps } from "react-input-autosize";
import Skeleton from "react-loading-skeleton";
import { type DefaultFormFieldProps } from "~/field/types";
import useAutoSizeInputUncontrolledClassNames from "./useAutoSizeInputUncontrolledClassNames";
import { SKELETONS } from "./constants";
import { FieldFormControllerChildrenArgs } from "~/field/components/FieldFormController/types";

export type AutoSizeInputUncontrolledProps = AutosizeInputProps &
  FieldFormControllerChildrenArgs<{
    className?: string;
    placeholder?: string;
  }>;

const AutoSizeInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<AutoSizeInputUncontrolledProps>
> = function ({
  forwardRef,
  error,
  className: initialClassName,
  isLoading,
  ...restProps
}) {
  const { className, skeletonClasses } = useAutoSizeInputUncontrolledClassNames(
    initialClassName as string,
    error as string
  );

  return (
    <>
      {isLoading ? (
        <div className={className}>
          <div className={skeletonClasses}>
            <Skeleton {...SKELETONS.input} />
          </div>
        </div>
      ) : (
        <AutosizeInput
          inputClassName={className}
          ref={forwardRef}
          {...restProps}
        />
      )}
    </>
  );
};

export default AutoSizeInputUncontrolled;
