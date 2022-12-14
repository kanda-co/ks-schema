import React, { type FunctionComponent } from "react";
import { FormProvider } from "react-hook-form";

import { type StringIndexedObject } from "~/types";

export interface FormWrapperProps {
  form: any;
  id: string;
  onSubmit?: (value?: StringIndexedObject) => void;
  children?: JSX.Element | JSX.Element[];
}

const FormWrapper: FunctionComponent<FormWrapperProps> = function ({
  form,
  onSubmit,
  children,
}) {
  return (
    <FormProvider {...form} onSubmit={onSubmit}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
