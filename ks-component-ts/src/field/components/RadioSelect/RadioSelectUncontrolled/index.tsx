import React, { type FunctionComponent } from "react";
import { DefaultFormFieldProps } from "~/field/types";
import { type RadioSelectUncontrolledProps } from "../types";
import useRadioSelectUncontrolledClassNames from "./useRadioSelectUncontrolledClassNames";
import Option from "./Option";

const RadioSelectUncontrolled: FunctionComponent<
  DefaultFormFieldProps<RadioSelectUncontrolledProps>
> = function ({
  name,
  inline = false,
  wrap = false,
  wrapBorder = true,
  options,
  className,
  ...restProps
}) {
  const classNames = useRadioSelectUncontrolledClassNames(
    inline,
    wrap,
    className
  );

  return (
    <div className={classNames.container}>
      {options?.map((option) => (
        <Option
          fieldName={name as string}
          value={option.value}
          name={option.name}
          inline={inline}
          wrap={wrap}
          wrapBorder={wrapBorder}
          key={option.value}
          disabled={option?.disabled || false}
          warning={option.warning || false}
          icon={option.icon}
          className={option.className}
          {...restProps}
        />
      ))}
    </div>
  );
};

export default RadioSelectUncontrolled;
