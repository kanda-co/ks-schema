import React, { FunctionComponent } from "react";
import { FormProvider, FormProviderProps } from "react-hook-form";

export interface FormProps {
  form: FormProviderProps;
}

const Form: FunctionComponent<FormProps> = function ({ form, children }) {
  return <FormProvider {...form}>{children}</FormProvider>;
};

export default Form;
