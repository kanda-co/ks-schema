import React, {
  useCallback,
  type FunctionComponent,
  type HTMLAttributes,
} from "react";
import { SubmitHandler, FormProvider, UseFormReturn } from "react-hook-form";

import { type StringIndexedObject } from "~/types";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  id: string;
  isLoading?: boolean;
  onSubmit: (
    data: StringIndexedObject,
    event?: React.BaseSyntheticEvent
  ) => void;
}

const Form: FunctionComponent<FormProps> = function ({
  form,
  id,
  isLoading = false,
  onSubmit: inputOnSubmit,
  children,
  ...restProps
}) {
  const onSubmit: SubmitHandler<StringIndexedObject> = useCallback(
    (values: StringIndexedObject, event?: React.BaseSyntheticEvent): void => {
      console.log(id);
      console.log(event);
      inputOnSubmit(values, event);
    },
    [id, inputOnSubmit]
  );

  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full"
        id={id}
        {...restProps}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
