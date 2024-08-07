import React, { type FunctionComponent } from "react";
import { FieldInfoWrapperProps } from "~/field/types";
import Label from "~/field/components/Label";
import Error from "~/field/components/Error";
import Warning from "~/field/components/Warning";
import useDefaultFieldInfo from "~/field/components/DefaultFieldInfo/useDefaultFieldInfo";

const DefaultFieldInfo: FunctionComponent<FieldInfoWrapperProps> = function ({
  name,
  id,
  label,
  helperText,
  error,
  className,
  warning,
  isLoading,
  autoWidth,
  prepend,
  append,
  wrapperProps = {},
  contentRelative = true,
  children,
}) {
  const { className: wrapperClassName, ...restWrapperProps } = wrapperProps;

  const { classNames, errorText } = useDefaultFieldInfo(
    error,
    isLoading,
    className,
    autoWidth,
    wrapperClassName,
    contentRelative
  );

  return (
    <div
      id={`${id || name}-wrapper`}
      className={classNames.container}
      {...restWrapperProps}
    >
      {label && (
        <Label
          id={id}
          label={label}
          isLoading={isLoading}
          autoWidth={autoWidth}
          helperText={helperText}
        />
      )}

      <div className={classNames.content}>
        {prepend}
        {children}
        {append}
      </div>

      {!isLoading && warning && !errorText && <Warning warning={warning} />}
      {!isLoading && errorText && <Error error={errorText} />}
    </div>
  );
};

export default DefaultFieldInfo;
