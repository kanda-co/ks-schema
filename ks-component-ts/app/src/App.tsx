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
    defaultValues: {
      range1: "100000",
      range2: "100000",
    },
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
          <Field.RangeInput
            name="range1"
            isLoading={isLoading}
            min="0"
            max="200000"
            formatter={formatter}
          />
          <Field.RangeInput
            name="range2"
            isLoading={isLoading}
            min="0"
            max="200000"
            formatter={formatter}
          />
          <Button.Text submit label="submit" id="ksts-test-form-submit" />
        </Form>
      </div>
    </div>
  );
}

export default App;
