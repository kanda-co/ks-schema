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
import { useEffect, useState } from "react";
import { Button } from "@kanda-libs/ks-design-library";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function App() {
  const form = useForm({
    mode: "onBlur",
  });

  const { watch, setValue } = form;
  const { range1, range2 } = watch();

  const onSubmit = (data: StringIndexedObject) => console.log({ data });
  const [query, setQuery] = useState("");

  const validateRange = (
    value: string | number | boolean | undefined
  ): boolean => {
    const v = `${value}`;
    const test = parseInt(v, 10);
    if (test < 50000) return false;
    return true;
  };

  const validation: ValidationItems = {
    validate: {
      value: (value: string | number | boolean | undefined) =>
        validateRange(value),
      message: "Must be between over £500",
    },
  };

  const formatter = (value: string) => {
    const pounds = new Intl.NumberFormat("en-BG", {
      style: "currency",
      currency: "GBP",
    }).format(parseInt(value) / 100);
    return pounds;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const n = 200000 - parseInt(range1, 10);
    setValue("range2", String(n));
  }, [range1]);

  return (
    <div style={{ maxWidth: 500 }}>
      <div className="p-5">
        <Form
          id="ksts-test-form"
          form={form}
          onSubmit={onSubmit}
          className="flex flex-col p-6 bg-neutral-100"
        >
          <FormTheme variant="inline">
            <Widget.JobCustomerPhone className="bg-neutral-000 mb-10" />
          </FormTheme>
          <FormTheme variant="default">
            <Widget.JobCustomerPhone
              className="bg-neutral-000"
              name="defaultphone"
            />
          </FormTheme>
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
