window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import {
  useForm,
  Field,
  Form,
  OptionalHiddenField,
  Label,
  SearchInput,
  ValidationItems,
  Widget,
  FormTheme,
} from "@kanda-libs/ks-component-ts";
import { StringIndexedObject } from "~/types";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@kanda-libs/ks-design-library";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

interface FormValues {
  range: string;
}

function App() {
  const form = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      range: "65432",
    },
  });

  const onSubmit = useCallback((values: StringIndexedObject<FormValues>) => {
    console.log({ values });
  }, []);

  return (
    <div style={{ maxWidth: 500 }}>
      <div className="p-5">
        <Form
          id="ksts-test-form"
          form={form}
          onSubmit={onSubmit}
          className="flex flex-col p-6 bg-neutral-100"
        >
          <Field.RangeInput name="range" min="50001" max="100000" />
          <Button.Text
            submit
            label="submit"
            id="ksts-test-form-submit"
            className="mt-6"
          />
        </Form>
      </div>
    </div>
  );
}

export default App;
