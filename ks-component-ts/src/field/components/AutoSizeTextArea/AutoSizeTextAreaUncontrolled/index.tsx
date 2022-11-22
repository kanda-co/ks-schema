import React, {
  type FocusEventHandler,
  type FunctionComponent,
  type KeyboardEventHandler,
} from "react";
import type { AutoSizeTextAreaUncontrolledProps } from "./types";
import TextareaAutosize from "react-textarea-autosize";
import useAutoSizeTextAreaUncontrolledProps from "./useAutoSizeTextAreaUncontrolledProps";
import Skeleton from "react-loading-skeleton";

const AutoSizeTextAreaUncontrolled: FunctionComponent<AutoSizeTextAreaUncontrolledProps> =
  function ({
    forwardRef,
    error,
    className: initialClassName,
    isLoading,
    disableNewLine,
    collapsible,
    onBlur: initialOnBlur,
    defaultValue,
    ...restProps
  }) {
    const {
      placeholderClassName,
      className,
      skeletonClasses,
      onKeyDown,
      onBlur,
      value,
      showPlaceholder,
    } = useAutoSizeTextAreaUncontrolledProps({
      error,
      className: initialClassName,
      onBlur: initialOnBlur,
      collapsible,
      disableNewLine,
      defaultValue,
    });

    return (
      <>
        {isLoading ? (
          <div className={className}>
            <div className={skeletonClasses}>
              <Skeleton />
            </div>
          </div>
        ) : (
          <div className="flex flex-row relative w-full overflow-hidden">
            {showPlaceholder && (
              <span className={placeholderClassName}>{value}</span>
            )}
            <TextareaAutosize
              className={className}
              ref={forwardRef}
              onKeyDown={onKeyDown as KeyboardEventHandler<HTMLTextAreaElement>}
              {...restProps}
              defaultValue={defaultValue}
              onBlur={
                onBlur as unknown as FocusEventHandler<HTMLTextAreaElement>
              }
            />
          </div>
        )}
      </>
    );
  };

export default AutoSizeTextAreaUncontrolled;
