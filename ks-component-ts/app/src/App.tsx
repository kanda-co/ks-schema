window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import { useForm, Field, Form } from "@kanda-libs/ks-component-ts";
import { StringIndexedObject } from "~/types";
import { useState } from "react";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function App() {
  const form = useForm({
    defaultValues: {
      pct: undefined,
    },
  });
  const [query, setQuery] = useState("");

  return (
    <Form form={form} onSubmit={() => {}}>
      <Field.NumberInput
        label="Rent or mortgage"
        name="pct"
        {...{
          type: "price",
          placeholder: "£0.00",
          icon: "pound",
          iconVariant: "dark",
          symbol: "",
        }}
      />
    </Form>
  );
}

export default App;
