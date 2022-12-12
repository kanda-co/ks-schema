import React, {
  useCallback,
  type FunctionComponent,
  type HTMLAttributes,
} from "react";
import {
  SubmitHandler,
  FormProvider,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";
import { Amplitude, useAmplitude } from "@kanda-libs/ks-amplitude-provider";

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
  onSubmit,
  children,
  ...restProps
}) {
  const { logEvent } = useAmplitude();
  const { flush } = Amplitude;

  const onError: SubmitHandler<StringIndexedObject> = useCallback(
    (errors: StringIndexedObject, event?: React.BaseSyntheticEvent): void => {
      console.log({ errors });
      console.log({ id });
    },
    [id]
  );

  const interceptedSubmit: SubmitHandler<StringIndexedObject> = useCallback(
    (values: StringIndexedObject, event?: React.BaseSyntheticEvent): void => {
      logEvent("form-submitted", {
        element_id: id,
        info: {
          form: {
            [id]: values,
          },
        },
      });
      flush();
      onSubmit(values, event);
    },
    [id, onSubmit, logEvent]
  );

  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(interceptedSubmit, onError)}
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
