import React, { FunctionComponent } from "react";
import FieldFormController, {
  FieldFormControllerProps,
} from "~/field/components/FieldFormController";
import type {
  DefaultFormFieldProps,
  InputFunctionComponent,
} from "~/field/types";

export type FieldFormControllerPropsWithoutChildren<T> = Omit<
  FieldFormControllerProps<T>,
  "children"
>;

export default function withFieldFormController<T>(
  Component: InputFunctionComponent<T> | FunctionComponent<T>,
  formatName: null | ((name: string) => string) = null,
  passRegister = false,
  control = false
) {
  const formatNameMethod = formatName || ((name) => name);

  return (props: FieldFormControllerPropsWithoutChildren<T>) => (
    <FieldFormController
      {...props}
      name={formatNameMethod(props.name as string)}
      register={!passRegister}
      passRegister={passRegister}
      control={control}
    >
      {(fieldProps: DefaultFormFieldProps<T>) => (
        <Component
          {...fieldProps}
          forwardRef={fieldProps.forwardRef || fieldProps.ref}
        />
      )}
    </FieldFormController>
  );
}
