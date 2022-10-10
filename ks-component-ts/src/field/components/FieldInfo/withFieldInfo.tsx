import React, { forwardRef, FunctionComponent } from "react";
import FieldInfo from "~/field/components/FieldInfo";
import {
  DefaultFormFieldProps,
  WrappedWithFieldInfoFormComponent,
  WrappedFormComponentRestProps,
  FieldInfoWrapperProps,
} from "~/field/types";

export default function withFieldInfo<T>(
  Component: FunctionComponent<DefaultFormFieldProps<T>>
): WrappedWithFieldInfoFormComponent<T> {
  return forwardRef<
    HTMLElement,
    DefaultFormFieldProps<T> & FieldInfoWrapperProps
  >(
    (
      {
        id,
        name,
        label,
        helperText,
        error,
        warning,
        isLoading,
        autoWidth,
        prepend,
        append,
        className,
        ...restProps
      },
      ref
    ) => {
      return (
        <FieldInfo
          id={id || name}
          name={name}
          label={label}
          helperText={helperText}
          error={error}
          warning={warning}
          isLoading={isLoading}
          autoWidth={autoWidth}
          prepend={prepend}
          append={append}
          className={className}
        >
          <>
            <Component
              error={error}
              id={id}
              isLoading={isLoading}
              name={name}
              {...(restProps as WrappedFormComponentRestProps<T>)}
              forwardRef={ref}
            />
          </>
        </FieldInfo>
      );
    }
  );
}
