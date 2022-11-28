import { cloneElement, type FunctionComponent, useContext } from "react";
import { ArrayWrapperContext } from "~/field/components/Array/Wrapper";
import type { StringIndexedObject } from "~/types";
import type { ArrayInputProps } from "~/field/components/Array/types";

const ArrayInput: FunctionComponent<ArrayInputProps<{children: JSX.Element}>> = function (props) {
  const {
    index = 0,
    name,
    children,
    validationErrors,
    validationConditions,
  } = props;

  const { arrayName } = useContext(ArrayWrapperContext);

  if (!arrayName || typeof index === "undefined" || !name) {
    const typedProps = props as StringIndexedObject;

    console.log(
      `Missing values: ${Object.keys(props)
        .filter((key) => !typedProps[key])
        .join(", ")}`
    );
    console.log(
      `Provided values: ${Object.keys(props)
        .filter((key) => typedProps[key])
        .join(", ")}`
    );
    return null;
  }

  return cloneElement(children, {
    name: `${arrayName}.${index}.${name}`,
    validationConditions,
    validationErrors,
  });
};

export default ArrayInput;
