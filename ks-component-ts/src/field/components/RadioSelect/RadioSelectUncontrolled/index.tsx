import React, { FunctionComponent } from "react";
import { DefaultFormFieldProps } from "~/field/types";
import { type RadioSelectUncontrolledProps } from "../types";
import useRadioSelectUncontrolledClassNames from "./useRadioSelectUncontrolledClassNames";
import Option from "./Option";

const RadioSelectUncontrolled: FunctionComponent<
  DefaultFormFieldProps<RadioSelectUncontrolledProps>
> = function ({ name, inline = false, options, ...restProps }) {
  const classNames = useRadioSelectUncontrolledClassNames(inline);

  return (
    <div className={classNames.container}>
      {options?.map((option) => (
        <Option
          fieldName={name as string}
          value={option.value}
          name={option.name}
          inline={inline}
          key={option.value}
          {...restProps}
        />
      ))}
    </div>
  );
};

export default RadioSelectUncontrolled;
