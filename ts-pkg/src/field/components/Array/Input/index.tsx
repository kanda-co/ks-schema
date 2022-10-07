import { cloneElement, type FunctionComponent, useContext } from "react";
import { type ValidationProps } from "~/field/types";
import { ArrayWrapperContext } from "~/field/components/Array/Wrapper";
import { type StringIndexedObject } from "~/types";

export interface ArrayInputProps extends ValidationProps {
  index: number;
  name: string;
  children: JSX.Element;
}

const ArrayInput: FunctionComponent<ArrayInputProps> = function (props) {
  const { index, name, children, validationErrors, validationConditions } =
    props;

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
