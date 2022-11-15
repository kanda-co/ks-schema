import React, { FunctionComponent, HTMLAttributes } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  isLoading?: boolean;
  onSubmit: (data: any) => void;
}

const Form: FunctionComponent<FormProps> = function ({
  form,
  isLoading = false,
  onSubmit,
  children,
  ...restProps
}) {
  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full"
        {...restProps}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
