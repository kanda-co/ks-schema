import React, { type FunctionComponent } from "react";
import FieldFormController, {
  type FieldFormControllerProps,
} from "~/field/components/FieldFormController";
import type {
  DefaultFormFieldProps,
  InputFunctionComponent,
} from "~/field/types";

export type FieldFormControllerPropsWithoutChildren<T> = Omit<
  FieldFormControllerProps<T>,
  "children" | "$$typeof"
>;

export default function withFieldFormController<T>(
  Component: InputFunctionComponent<T> | FunctionComponent<T>,
  formatName: null | ((name: string) => string) = null,
  passRegister = false,
  control = false,
  valueAsNumber = false
) {
  const formatNameMethod = formatName || ((name) => name);

  return (props: FieldFormControllerPropsWithoutChildren<T>) => (
    <FieldFormController
      {...props}
      name={formatNameMethod(props.name as string)}
      register={!passRegister}
      passRegister={passRegister}
      control={control}
      valueAsNumber={valueAsNumber}
    >
      {/*
        The ref is taken out of fieldProps because ref cannot be passed
        as a prop to function components
      */}
      {({ ref, ...fieldProps }: DefaultFormFieldProps<T>) => (
        <Component
          {...(fieldProps as DefaultFormFieldProps<T>)}
          forwardRef={fieldProps.forwardRef || ref}
        />
      )}
    </FieldFormController>
  );
}
