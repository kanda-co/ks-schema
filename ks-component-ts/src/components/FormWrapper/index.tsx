import React, { FunctionComponent } from "react";
import { FormProvider } from "react-hook-form";

export interface FormWrapperProps {
  form: any;
  onSubmit?: () => void;
  children?: JSX.Element | JSX.Element[];
}

const FormWrapper: FunctionComponent<FormWrapperProps> = function ({
  form,
  onSubmit,
  children,
}) {
  return (
    <FormProvider {...form}>
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
