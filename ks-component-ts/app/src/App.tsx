window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import { useForm, Field, Form, FormTheme } from "@kanda-libs/ks-component-ts";
import { StringIndexedObject } from "~/types";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

export const PRICE_COMPONENT_PROPS = {
  autoWidth: true,
  label: "Price",
  placeholder: "1.00",
  prefix: "",
  type: "price",
};

export const PERCENT_COMPONENT_PROPS = {
  label: "Percentage",
  placeholder: "0%",
  type: "percentage",
};

export const FIRST_NAME_COMPONENT_PROPS = {
  label: "First Name",
  placeholder: "First name",
};

export const TITLE_COMPONENT_PROPS = {
  label: "Title",
  placeholder: "Select...",
  options: [
    {
      name: "Mr",
      value: "mr",
    },
    {
      name: "Mrs",
      value: "mrs",
    },
  ],
};

function App() {
  const form = useForm({
    defaultValues: {
      deposit: 10,
      pct: 10,
    },
  });

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
          <FormTheme variant="emphasized">
            <div style={{ maxWidth: "400px" }}>
              <Field.Select
                name="hello"
                options={[{ value: "123", name: "xxx" }]}
                placeholder="test"
              />
              <Field.RichTextInput
                name="term"
                label="Term"
                placeholder="Enter some test"
                inputHasFocusedBorder
              />
            </div>
          </FormTheme>
        </div>
      </div>
    </Form>
  );
}

export default App;

// <div style={{ maxWidth: "400px" }}>
// <Field.NumberIncrementInput
//   name="deposit"
//   id="deposit"
//   label="Deposit"
//   minValue={10}
//   maxValue={50}
// />
// </div>

// {/* <Field.NumberInput
// name="price"
// id="price"
// {...PRICE_COMPONENT_PROPS}
// />
// <Field.Input
// name="firstName"
// id="firstName"
// {...FIRST_NAME_COMPONENT_PROPS}
// />
// <Field.Select
// name="title"
// id="title"
// {...TITLE_COMPONENT_PROPS}
// />
// <Field.Input name="test" id="test" icon="pound" />
// <Field.DatePickerInput name="date" id="date" /> */}
