window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import { useForm, Field, Form } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
import { StringIndexedObject } from "~/types";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

function App() {
  const form = useForm();

  return (
    <Form
      id="app"
      form={form}
      onSubmit={() => {
        console.log("test");
      }}
    >
      <div className="App">
        <div className="px-8 py-4">
          <div style={{ maxWidth: "400px" }}>
            <Field.RadioSelect
              name="term"
              label="Term"
              inline
              wrap
              variant="streamline"
              options={[
                { name: "\u00201 year\u0020", value: "12" },
                { name: "2 years", value: "24" },
                { name: "5 years", value: "60" },
                { name: "10 years", value: "120" },
              ]}
            />
          </div>

          <div style={{ maxWidth: "400px" }}>
            <Field.RadioSelect
              name="gender"
              id="gender"
              label="Gender"
              inline
              wrap
              variant="streamline-radio"
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
              ]}
            />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default App;
