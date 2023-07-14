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
} from "@kanda-libs/ks-component-ts";
import { StringIndexedObject } from "~/types";
import { useState } from "react";
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
    defaultValues: {
      range: "100000",
    },
  });
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

  return (
    <div style={{ maxWidth: 500 }}>
      <SearchInput query={query} onSearch={setQuery} />
      <button
        onClick={() => {
          console.log("click");
          setIsLoading(!isLoading);
        }}
        className="mb-10"
      >
        change
      </button>
      <div className="px-5">
        <Form
          id="ksts-test-form"
          form={form}
          onSubmit={onSubmit}
          className="flex flex-col"
        >
          <Field.Validator validation={validation}>
            <Field.RangeInput
              name="range"
              isLoading={isLoading}
              min="0"
              max="1000000"
              formatter={formatter}
            />
          </Field.Validator>
          <Button.Text submit label="submit" id="ksts-test-form-submit" />
        </Form>
      </div>
    </div>
  );
}

export default App;
