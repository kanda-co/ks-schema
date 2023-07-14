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
} from "@kanda-libs/ks-component-ts";
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
      pct: 10,
    },
  });
  const [query, setQuery] = useState("");

  return (
    <div style={{ maxWidth: 500 }}>
      <SearchInput query={query} onSearch={setQuery} />
      <div className="px-5">
        <Field.RangeInput />
      </div>
    </div>
  );
}

export default App;
