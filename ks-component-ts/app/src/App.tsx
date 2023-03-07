window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import {
  useForm,
  Field,
  Form,
  OptionalHiddenField,
} from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
import { StringIndexedObject } from "~/types";
import { Icon, Text } from "@kanda-libs/ks-design-library";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext } from "~/index";
import FilterableSelect from "~/field/components/FilterableSelect";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

function App() {
  const form = useForm({
    defaultValues: {
      pct: 10,
    },
  });

  const { watch, setValue } = form;
  const pct = watch("pct");
  const options = [
    "kitchens_and_bathrooms",
    "gas_engineering",
    "web_development",
  ].map((option) => ({
    value: option,
    name: option.replace(/_/g, " ").replace("and", "&"),
  }));

  return (
    <Form
      id="app"
      form={form}
      onSubmit={(formValues) => {
        console.log(formValues);
      }}
    >
      <div className="App">
        <div className="px-8 py-4">
          <div style={{ maxWidth: "400px" }}>
            <FilterableSelect name="options" options={options} />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default App;
