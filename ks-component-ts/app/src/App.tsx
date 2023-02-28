window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import { useForm, Field, Form, FormTheme } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
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
  wrapperProps: {
    className: "mr-2",
  },
  // append: <Append />,
  // isAllowed: makeIsAllowed(0, 1000000),
  type: "price",
  // validation: PRICE_VALIDATION,
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
    },
  });

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
          <FormTheme variant="streamline">
            <div style={{ maxWidth: "145px" }}>
              <Field.PercentageIncrementInput
                label="Deposit"
                name="deposit"
                id="deposit"
                placeholder="0"
              />
              <Field.NumberInput
                name="price"
                id="price"
                {...PRICE_COMPONENT_PROPS}
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
