import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { StringIndexedObject } from "@kanda-libs/ks-design-library";
import { Form } from "~/components";

export interface MultiStepFormWrapperProps {
  name: string;
  page: string;
  form: ReturnType<typeof useForm>;
  onSubmit: (data: StringIndexedObject) => void;
  children: JSX.Element | JSX.Element[];
}

const MultiStepFormWrapper: FunctionComponent<MultiStepFormWrapperProps> =
  function ({ name, page, form, onSubmit, children }) {
    return (
      <Form
        id={["multi-step-form", name, page].join("-")}
        form={form}
        onSubmit={onSubmit}
      >
        {children}
      </Form>
    );
  };

export default MultiStepFormWrapper;
