import React, { type FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import useTextAreaInputClasses from "./useTextAreaInputClasses";
import { SKELETON_COUNT } from "./constants";
import { DefaultFormFieldProps } from "~/field/types";
import { Uncontrolled as AutoSizeTextArea } from "~/field/components/AutoSizeTextArea";

export interface TextAreaInputUncontrolledProps {
  className?: string;
  autoSize?: string;
}

const TextAreaInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<TextAreaInputUncontrolledProps>
> = function ({
  forwardRef,
  error,
  className,
  autoSize = false,
  isLoading,
  ...props
}) {
  const { className: textAreaClassName, skeletonClasses } =
    useTextAreaInputClasses(className);

  const TextArea = autoSize ? AutoSizeTextArea : "textarea";

  return (
    <>
      {isLoading ? (
        <div className={textAreaClassName}>
          <div className={skeletonClasses}>
            <Skeleton count={SKELETON_COUNT} />
          </div>
        </div>
      ) : (
        <TextArea
          className={textAreaClassName}
          ref={forwardRef}
          {...props}
          placeholder={props.placeholder as string}
        />
      )}
    </>
  );
};

export default TextAreaInputUncontrolled;
