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
import get from "lodash.get";

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

const getNestedPaths = (
  object: StringIndexedObject,
  currentPath = ""
): string[] => {
  const keys = Object.keys(object);
  const paths = keys.reduce<string[]>(
    (all: string[], key: string): string[] => {
      const objKeys = Object.keys(object[key]);
      // Extraction if array
      if (Array.isArray(object[key])) {
        const array = object[key];
        const nestedPaths = array.reduce(
          (nested: string[], current: StringIndexedObject, index: number) => {
            const path = getNestedPaths(current, `${key}.${index}`);
            nested = nested.concat(path);
            return nested;
          },
          []
        );
        all = all.concat(nestedPaths);
        return all;
      }
      // Extraction if object
      if (typeof object[key] === "object") {
        const objKeys = Object.keys(object[key]);
        if (["type", "message"].every((k) => objKeys.includes(k))) {
          all.push(`${currentPath ? `${currentPath}.` : ""}${key}`);
          return all;
        }
        const nestedPath = getNestedPaths(object[key], key);

        all = all.concat(nestedPath);
        return all;
      }
      return all;
    },
    []
  );
  return paths;
};

const getErrorObjectKeys = (object: StringIndexedObject): string[] =>
  getNestedPaths(object);

const createErrorObject = (
  paths: string[],
  errors: StringIndexedObject,
  getValues: (path?: string) => StringIndexedObject
): StringIndexedObject =>
  paths.reduce(
    (obj: StringIndexedObject, path: string): StringIndexedObject => {
      const type = get(errors, `${path}.type`);
      const value = getValues(path) || "";
      return {
        ...obj,
        [path]: {
          type,
          value,
        },
      };
    },
    {}
  );

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
  const { getValues } = form;

  const onError: SubmitHandler<StringIndexedObject> = useCallback(
    (errors: StringIndexedObject, event?: React.BaseSyntheticEvent): void => {
      const paths = getErrorObjectKeys(errors);
      const obj = createErrorObject(paths, errors, getValues);
      logEvent("form-error", {
        element_id: id,
        info: {
          form: {
            [id]: obj,
          },
        },
      });
      flush();
    },
    [id, getValues, logEvent, flush]
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
    [id, onSubmit, logEvent, flush]
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
