window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import { useForm, Field, Form, FormTheme } from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
import { StringIndexedObject } from "~/types";
import { Button } from "@kanda-libs/ks-design-library";
import { useCallback, useEffect, useMemo, useState } from "react";
import { boolean } from "io-ts";

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
  label: "Percentage (between 10% and 50%)",
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

// {/* <Field.Validator
//         validation={
//           props.validation ||
//           CreditExtraApplicantsCustomerDetailsGenderArraySelectValidation
//         }
//         nested={props.nested}
//       >
//         <Field.RadioSelect
//           label="Gender"
//           placeholder="gender"
//           {...props}
//           options={
//             props.options || [
//               { name: "Male", value: "male" },
//               { name: "Female", value: "female" },
//             ]
//           }
//         />
//       </Field.Validator> */}

function App() {
  const form = useForm({
    defaultValues: {
      pct: 10,
    },
  });

  const { watch, setValue } = form;
  const pct = watch("pct");
  const term = watch("term");
  const options = [
    { name: "1 year", value: "12" },
    { name: "2 years", value: "24", disabled: pct < 10 },
    { name: "5 years", value: "60", disabled: pct > 50 },
    { name: "10 years", value: "120" },
  ];

  const [toggle, setToggle] = useState<boolean>(false);
  const onClick = useCallback(() => setToggle(!toggle), [toggle, setToggle]);

  const warning = useMemo(() => {
    if (pct >= 10 && pct <= 50) return null;
    if (pct < 10) return "Some terms are not available below 10% deposit";
    return "Some terms are not available above 50% deposit";
  }, [pct]);

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
            <Field.Validator
              validation={{
                required: { value: true, message: "Term is required." },
              }}
            >
              <Field.RadioSelect
                name="term"
                label="Term"
                inline
                wrap
                variant="streamline"
                options={options}
                warning={warning}
                isLoading={toggle}
              />
            </Field.Validator>
          </div>
          <FormTheme variant="streamline">
            <Field.NumberInput
              name="pct"
              id="pct"
              lowerLimit={0}
              upperLimit={60}
              isLoading={toggle}
              appendComponent={<p>Append</p>}
              {...PERCENT_COMPONENT_PROPS}
            />
          </FormTheme>
          <Button.Text
            submit
            label="submit"
            id="test-submit"
            variant="gradient"
          />

          <Button.Text
            submit
            label="toggle"
            id="test-submit"
            variant="gradient"
            onClick={onClick}
          />
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
