import React, { FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import useTextAreaInputClasses from "./useTextAreaInputClasses";
import { SKELETON_COUNT } from "./constants";
import { DefaultFormFieldProps } from "~/field/types";

export interface Props {
  className?: string;
}

const TextAreaInputUncontrolled: FunctionComponent<
  DefaultFormFieldProps<Props>
> = function ({ forwardRef, error, className, isLoading, ...props }) {
  const { className: textAreaClassName, skeletonClasses } =
    useTextAreaInputClasses(className);

  return (
    <>
      {isLoading ? (
        <div className={textAreaClassName}>
          <div className={skeletonClasses}>
            <Skeleton count={SKELETON_COUNT} />
          </div>
        </div>
      ) : (
        <textarea className={textAreaClassName} ref={forwardRef} {...props} />
      )}
    </>
  );
};

export default TextAreaInputUncontrolled;
