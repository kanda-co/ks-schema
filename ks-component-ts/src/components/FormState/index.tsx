import React, { type FunctionComponent } from "react";
import {
  type FieldValues,
  useFormState,
  type UseFormStateReturn,
} from "react-hook-form";

export interface FormStateProps {
  children: (state: UseFormStateReturn<FieldValues>) => JSX.Element;
}

const FormState: FunctionComponent<FormStateProps> = function ({ children }) {
  const state = useFormState();

  return children(state);
};

export default FormState;
